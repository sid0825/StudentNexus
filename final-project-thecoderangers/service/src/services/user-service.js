import userModel from "../models/user-model.js";

/**
 * Retrieves a list of users based on the provided query.
 *
 * @param {Object} [query={}] - The query object to filter users.
 * @returns {Promise<Array>} A promise that resolves to an array of users.
 */
const getUsers = async (query = {}) => {
  // Return all users that match the query
  return await userModel.find(query);
};

/**
 * Retrieves a user from the database based on the provided query.
 * 
 * @param {Object} [query={}] - The query object to find the user.
 * @returns {Promise<Object>} - A promise that resolves to the user object populated with university details.
 */
const getUser = async (query = {}) => {
  // Find a user that matches the query and populate the `university` field
  return await userModel.findOne(query).populate("university");
};

/**
 * Retrieves a user by their ID and populates the university field.
 *
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the user object with the populated university field.
 */
const getUserById = async (id) => {
  // Find a user by their ID and populate the `university` field
  return await userModel.findById(id).populate("university");
};

/**
 * Creates a new user and populates the university field.
 *
 * @param {Object} user - The user object to be created.
 * @returns {Promise<Object>} The newly created user with the university field populated.
 */
const createUser = async (user) => {
  // Create a new user and populate the `university` field
  const newUser = await userModel.create(user);
  // Populate the `university` field for the newly created user
  const populateUser = await userModel.findById(newUser._id).populate("university");
  return populateUser;
};


/**
 * Updates a user by their ID with the provided user data.
 *
 * @param {string} id - The ID of the user to update.
 * @param {Object} user - The user data to update.
 * @returns {Promise<Object>} The updated user document populated with university details.
 */
const updateUser = async (id, user) => {
  // Find a user by their ID and update their data
  return await userModel
    .findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    })
    .populate("university");
};

/**
 * Deletes a user by their ID.
 *
 * @param {string} id - The ID of the user to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the deleted user document, or null if no user was found.
 */
const deleteUser = async (id) => {
  // Find a user by their ID and delete it
  return await userModel.findByIdAndDelete(id);
};

export default {
  getUsers,
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
