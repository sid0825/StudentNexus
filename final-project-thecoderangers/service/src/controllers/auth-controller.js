import authService from "../services/auth-service.js";

/**
 * Registers a new user with the provided details.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.firstName - The first name of the user.
 * @param {string} req.body.lastName - The last name of the user.
 * @param {string} req.body.email - The email address of the user.
 * @param {string} req.body.password - The password for the user.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The newly created user object.
 */
const register = async (req, res) => {
    // Extract the required details from the request body.
    const { firstName, lastName, email, password } = req.body;
    // Register the user with the provided details.
    const user = await authService.register(firstName, lastName, email, password);
    // Send the response back to the client.
    return res.status(201).json(user);
};

/**
 * Handles user login.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The user object.
 */
const login = async (req, res) => {
    // Extract the email and password from the request body.
    const { email, password } = req.body;
    // Login the user with the provided email and password.
    const user = await authService.login(email, password);
    // Send the response back to the client.
    return res.status(200).json(user);
};

/**
 * Handles the forgot password functionality.
 * Generates a reset token and sends it to the user's email.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.email - The email address of the user who forgot their password.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
const forgotpassword = async (req, res) => {
    // Extract the email from the request body.
    const { email } = req.body;
    // Generate a reset token and send it to the user's email.
    const token = await authService.forgotpassword(email);
    // Send the response back to the client.
    console.log(token);
    // Send the response back to the client.
    return res.status(200).json({ message: "Reset token sent to email" });
};

/**
 * Resets the user's password using the provided token.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.email - The email address of the user.
 * @param {string} req.body.password - The new password for the user.
 * @param {string} req.body.token - The reset token.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The updated user object.
 */
const resetpassword = async (req, res) => {
    // Extract the email, password, and token from the request body.
    const { email, password, token } = req.body;
    // Reset the user's password using the provided token.
    const user = await authService.resetpassword(email, password, token);
    return res.status(200).json(user);
};

// Export the functions.
export default { register, login, forgotpassword, resetpassword };
