import propertyService from "../services/property-service.js";

/**
 * Retrieves properties based on the query parameters provided in the request.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.query - The query parameters from the request.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to sending a JSON response with the properties.
 */
const getProperty = async (req, res) => {
    // Extract the query parameters from the request.
    const query = { ...req.query };
    // Call the service method to get the properties based on the query parameters.
    const property = await propertyService.getProperties(query);
    // Send the response with the properties.
    return res.status(200).json(property);
};

/**
 * Retrieves a list of properties based on the query parameters provided in the request.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.query - The query parameters for filtering properties.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to sending a JSON response with the properties.
 */
const getProperties = async (req, res) => {
    // Extract the query parameters from the request.
    const query = { ...req.query };
    // Call the service method to get the properties based on the query parameters.
    const properties = await propertyService.getProperties(query);
    // Send the response with the properties.
    return res.status(200).json(properties);
};

/**
 * Retrieves a property by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the property to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to sending the property data as a JSON response.
 * @throws {Error} - Throws an error if the property is not found.
 */
const getPropertyById = async (req, res) => {
    // Extract the ID from the request parameters.
    const { id } = req.params;
    // Call the service method to get the property by its ID.
    const property = await propertyService.getPropertyById(id);
    // If the property is not found, throw an error.
    if (!property) throw new Error("Property not found");
    // Send the response with the property data.
    return res.status(200).json(property);
};

/**
 * Creates a new property.
 *
 * @async
 * @function createProperty
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The property data to create.
 * @param {Object} res - Express response object.
 * @returns {Promise<Object>} The created property.
 * @throws {Error} If there is an error during property creation.
 */
const createProperty = async (req, res) => {
    // Try to create a new property.
    try {
        // Call the service method to create a new property.
        const property = await propertyService.createProperty(req.body);
        // Send the response with the created property.
        return res.status(201).json(property);
    } catch (error) {
        // If there is an error, send a response with the error message.
        return res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a property with the given ID using the data provided in the request body.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the property to update.
 * @param {Object} req.body - The data to update the property with.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 * @throws {Error} - Throws an error if the property is not found or if there is a server error.
 */
const updateProperty = async (req, res) => {
    // Try to update the property.
    try {
        // Extract the ID from the request parameters.
        const { id } = req.params;
        // Call the service method to update the property with the given ID.
        const property = await propertyService.updateProperty(id, req.body);
        // If the property is not found, throw an error.
        if (property) {
            // Send the response with the updated property.
            return res.status(200).json(property);
        }
        // If the property is not found, throw an error.
        throw new Error("Property not found");
    } catch (error) {
        // If there is an error, send a response with the error message.
        return res.status(500).json({ error: error.message });
    }
};

/**
 * Deletes a property by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the property to delete.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
const deleteProperty = async (req, res) => {
    // Try to delete the property.
    try {
        // Extract the ID from the request parameters.
        const { id } = req.params;
        // Call the service method to delete the property with the given ID.
        const property = await propertyService.deleteProperty(id);
        // If the property is found, send the response with the deleted property
        if (property) {
            // Send the response with the deleted property.
            return res.status(200).json(property);
        }
        // If the property is not found, throw an error.
        throw new Error("Property not found");
    } catch (error) {
        // If there is an error, send a response with the error message.
        return res.status(500).json({ error: error.message });
    }
};

// Export the controller functions.
export default {
    getProperty,
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
};
