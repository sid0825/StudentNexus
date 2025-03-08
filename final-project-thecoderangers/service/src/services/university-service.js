import UniversityModel from "../models/university-models.js";

/**
 * Retrieves a list of universities based on the provided query.
 *
 * @param {Object} [query={}] - The query object to filter universities.
 * @returns {Promise<Array>} A promise that resolves to an array of universities.
 */
const getUniversities = async (query = {}) => {
  return await UniversityModel.find(query);
};

/**
 * Retrieves a single university document that matches the provided query.
 *
 * @param {Object} [query={}] - The query object to filter the university documents.
 * @returns {Promise<Object|null>} A promise that resolves to the university document if found, or null if not found.
 */
const getUniversity = async (query = {}) => {
  return await UniversityModel.findOne(query);
};

/**
 * Creates a new university record in the database.
 *
 * @param {Object} university - The university object to be created.
 * @returns {Promise<Object>} The newly created university record.
 */
const createUniversity = async (university) => {
  const newUniversity = new UniversityModel(university);
  return await newUniversity.save();
};

/**
 * Retrieves a university document by its ID.
 *
 * @param {string} id - The ID of the university to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the university document if found, or null if not found.
 */
const getUniversityById = async (id) => {
  return await UniversityModel.findOne({ _id: id }).exec();
};

/**
 * Updates a university document in the database.
 *
 * @param {string} id - The ID of the university to update.
 * @param {Object} university - The updated university data.
 * @returns {Promise<Object>} The updated university document.
 */
const updateUniversity = async (id, university) => {
  return await UniversityModel.findByIdAndUpdate(id, university, {
    new: true,
  });
};

/**
 * Deletes a university by its ID.
 *
 * @param {string} id - The ID of the university to delete.
 * @returns {Promise<Object|null>} The deleted university object, or null if no university was found with the given ID.
 */
const deleteUniversity = async (id) => {
  const university = await UniversityModel.findByIdAndDelete(id);
  return university;
};

// Export the functions to be used in other modules
export default {
  getUniversities,
  getUniversity,
  createUniversity,
  getUniversityById,
  updateUniversity,
  deleteUniversity,
};
