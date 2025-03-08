import universityService from "../services/university-service.js";

/**
 * Retrieves a list of universities based on query parameters.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.query - The query parameters from the request.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to sending a JSON response with the list of universities.
 */
const getUniversities = async (req, res) => {
  // Extract the query parameters from the request.
  const params = { ...req.query };
  // Call the service method to get the universities based on the query parameters.
  const universities = await universityService.getUniversities(params);
  // Send the response with the universities.
  return res.status(200).json(universities);
};

/**
 * Creates a new university record.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request containing university data.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The created university object.
 */
const createUniversity = async (req, res) => {
  // Extract the university data from the request body.
  const data = { ...req.body };
  // Call the service method to create a new university record.
  const university = await universityService.createUniversity(data);
  // Send the response with the created university object.
  return res.status(201).json(university);
};

//Fetch a university by ID.
const getUniversityById = async (req, res) => {
  const { id } = req.params;
  const university = await universityService.getUniversityById(id);
  if (!university) throw new Error("University not found");
  return res.status(200).json(university);
};


/**
 * Updates the details of a university.
 *
 * @async
 * @function updateUniversity
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the university to update.
 * @param {Object} req.body - The data to update the university with.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The updated university object.
 * @throws {Error} If the university is not found.
 */
const updateUniversity = async (req, res) => {
  // Extract the university ID from the request parameters.
  const { id } = req.params;
  // Extract the university data from the request body.
  const data = { ...req.body };
  // Call the service method to update the university by its
  const university = await universityService.updateUniversity(id, data);
  // If the university is not found, throw an error.
  if (!university) throw new Error("University not found");
  // Send the response with the updated university object.
  return res.status(200).json(university);
};


/**
 * Deletes a university by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the university to delete.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with no content.
 * @throws {Error} - Throws an error if the university is not found.
 */
const deleteUniversity = async (req, res) => {
  // Extract the university ID from the request parameters.
  const id = req.params.id;
  // Call the service method to delete the university by its ID.
  const university = await universityService.deleteUniversity(id);
  // If the university is not found throw an error.
  if (!university) throw new Error("University not found");
  // Send a response with status 204 (No Content).
  return res.status(204).send();
};

// Export the controller functions
export default {
  getUniversities,
  createUniversity,
  getUniversityById,
  updateUniversity,
  deleteUniversity,
};
