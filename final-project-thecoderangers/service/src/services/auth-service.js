import userService from "./user-service.js";
import universityService from "./university-service.js";
import sendEmail from "../utils/sendEmail.js";

/**
 * Registers a new user with the provided details.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user's account.
 * @returns {Promise<Object>} The created user object.
 */
const register = async (firstName, lastName, email, password) => {
    // Check if the email is from a university
    if (email) {
        // Split the email address to get the domain
        const domain = email.split("@")[1];
        // Check if the domain is a university
        const university = await universityService.getUniversity({ domain });
        // If the domain is a university, create a user with the university ID
        if (university) {
            // Create a new user with the university ID
            return userService.createUser({
                firstName,
                lastName,
                email,
                password,
                university: university.id,
            });
        }
    }
    // If the domain is not a university, create a user without the university ID
    return userService.createUser({ firstName, lastName, email, password });
};

/**
 * Authenticates a user with the provided email and password.
 *
 * @param {string} email - The email of the user attempting to log in.
 * @param {string} password - The password of the user attempting to log in.
 * @returns {Promise<{user: Object, accessToken: string}>} - A promise that resolves to an object containing the authenticated user and an access token.
 * @throws {Error} - Throws an error if the user is not found or if the password is incorrect.
 */
const login = async (email, password) => {
    // Find the user with the provided email
    const user = await userService.getUser({ email });
    // If the user is not found, throw an error
    if (!user) throw new Error("User not found");
    // Compare the provided password with the user's password
    const isMatch = await user.comparePassword(password);
    // If the passwords do not match, throw an error
    if (!isMatch) throw new Error("Incorrect password");
    // Generate an access token for the user
    const accessToken = await user.generateTokens();
    // Return the authenticated user and the access token
    return { user, accessToken };
};

/**
 * Sends a password reset email to the user with the given email address.
 *
 * @param {string} email - The email address of the user who forgot their password.
 * @returns {Promise<{resetToken: string}>} - An object containing the reset token.
 * @throws {Error} - Throws an error if the user is not found.
 */
const forgotpassword = async (email) => {
    // Find the user with the provided email
    const user = await userService.getUser({ email });
    // If the user is not found, throw an error
    if (!user) throw new Error("User not found");
    // Generate a password reset token for the user
    const resetToken = await user.generateResetPasswordToken();
    // Send an email to the user with the password reset token
    const data = await sendEmail({
        email: user.email,
        subject: "StudentNexus Password Reset",
        message: `Your password reset token is ${resetToken}`,
    });
    // Return the reset token
    console.log(data);
    return { resetToken };
};

/**
 * Resets the password for a user identified by their email, given a valid reset token.
 *
 * @param {string} email - The email of the user requesting the password reset.
 * @param {string} password - The new password to be set for the user.
 * @param {string} token - The reset token provided to the user for password reset.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the updated user.
 * @throws {Error} - Throws an error if the user is not found, the token is invalid, or the token has expired.
 */
const resetpassword = async (email, password, token) => {
    // Find the user with the provided email
    const user = await userService.getUser({ email });
    // If the user is not found, throw an error
    if (!user) throw new Error("User not found");
    // Check if the reset token is valid and has not expired
    if (user.resetToken.token != token) throw new Error("Invalid token");
    // Check if the reset token has expired
    if (user.resetToken.expires < Date.now()) throw new Error("Token expired");
    // Update the user's password and reset token
    user.password = password;
    user.resetToken = { token: 0 };
    // Save the updated user
    await user.save();
    // Return the updated user
    return { user };
};

// Export the auth service
export default { register, login, forgotpassword, resetpassword };
