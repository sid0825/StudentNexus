import { query } from "express";
import propertyModel from "../models/property-model.js";

/**
 * Retrieves a single property from the database based on the provided query.
 *
 * @param {Object} [query={}] - The query object to filter the property search.
 * @returns {Promise<Object|null>} - A promise that resolves to the found property object or null if no property is found.
 */
const getProperty = async (query = {}) => {
    return await propertyModel.findOne(query);
};

/**
 * Retrieves properties from the database based on the provided query.
 *
 * @param {Object} [query={}] - The query object to filter properties.
 * @returns {Promise<Array>} - A promise that resolves to an array of properties.
 */
const getProperties = async (query = {}) => {
    return await propertyModel.find(query);
};

/**
 * Retrieves a property by its ID.
 *
 * @param {string} id - The ID of the property to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the property object if found, or null if not found.
 */
const getPropertyById = async (id) => {
    return await propertyModel.findById(id);
};

/**
 * Creates a new property in the database.
 *
 * @param {Object} data - The data for the new property.
 * @returns {Promise<Object>} The created property object.
 */
const createProperty = async (data) => {
    return await propertyModel.create(data);
};

/**
 * Updates a property in the database.
 *
 * @param {string} id - The ID of the property to update.
 * @param {Object} property - The property data to update.
 * @returns {Promise<Object>} The updated property document.
 */
const updateProperty = async (id, property) => {
    return await propertyModel.findByIdAndUpdate(id, property, {
        new: true,
        runValidators: true,
    });
};

/**
 * Deletes a property by its ID.
 *
 * @param {string} id - The ID of the property to delete.
 * @returns {Promise<Object|null>} The deleted property document, or null if no document was found.
 */
const deleteProperty = async (id) => {
    return await propertyModel.findByIdAndDelete(id);
};

export default {
    getProperty,
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
};
