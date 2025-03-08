import userService from "../services/user-service.js";

/**
 * Retrieves a list of users and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
const getUsers = async (req, res) => {
  // Call the getUsers method from the userService.
  const users = await userService.getUsers();
  // Send the users as a JSON response.
  return res.status(200).json({ users });
};

/**
 * Retrieves a user by their ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the user to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is retrieved.
 * @throws {Error} If the user is not found.
 */
const getUserById = async (req, res) => {
  // Extract the ID from the request parameters.
  const { id } = req.params;
  // Call the getUserById method from
  const user = await userService.getUserById(id);
  // If a user is found, send it as a JSON response.
  if (user) {
    // Send the user as a JSON response.
    return res.status(200).json({ user });
  }
  // If the user is not found, throw an error.
  throw new Error("User not found");
};

/**
 * Creates a new user.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request containing user data.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The created user object or an error message.
 */
const createUser = async (req, res) => {
  // Wrap the code in a try-catch block to handle any errors.
  try {
    // Call the createUser method from the userService.
    const user = await userService.createUser(req.body);
    // Send the user as a JSON response.
    return res.status(201).json({ user });
  } catch (error) {
    // If an error occurs, send an error response.
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Updates a user with the given ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the user to update.
 * @param {Object} req.body - The request body containing the user data to update.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
const updateUser = async (req, res) => {
  // Wrap the code in a try-catch block to handle any errors.
  try {
    // Extract the ID from the request parameters.
    const { id } = req.params;
    // Call the updateUser method from the userService.
    const user = await userService.updateUser(id, req.body);
    // If the user is found, send it as a JSON response.
    if (user) {
      // Send the user as a JSON response.
      return res.status(200).json({ user });
    }
    // If the user is not found, throw an error.
    throw new Error("User not found");
  } catch (error) {
    // If an error occurs, send an error response.
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Deletes a user by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the user to delete.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is deleted.
 */
const deleteUser = async (req, res) => {
  // Wrap the code in a try-catch block to handle any errors.
  try {
    // Extract the ID from the request parameters.
    const { id } = req.params;
    // Call the deleteUser method from the userService.
    const user = await userService.deleteUser(id);
    // If the user is found, send it as a JSON response.
    if (user) {
      // Send the user as a JSON response.
      return res.status(200).json({ user });
    }
    // If the user is not found, throw an error.
    throw new Error("User not found");
  } catch (error) {
    // If an error occurs, send an error response.
    return res.status(500).json({ error: error.message });
  }
};

// Export the controller functions.
export default { getUsers, getUserById, createUser, updateUser, deleteUser };
