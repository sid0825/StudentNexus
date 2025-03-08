import listingService from "../services/listing-service.js";

/**
 * Retrieves a list of listings from the listing service and sends them as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
const getListings = async (req, res) => {
    // Call the listing service to get the listings.
    const listings = await listingService.getListing();
    // Send the listings as a JSON response.
    return res.status(200).json(listings);
};

/**
 * Retrieves a listing by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the listing to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 * @throws {Error} If the listing is not found.
 */
const getListingById = async (req, res) => {
    // Get the ID of the listing from the request parameters.
    const { id } = req.params;
    // Call the listing service to get the listing by ID.
    const listing = await listingService.getListingById(id);
    // If the listing is not found, throw an error.
    if (!listing) throw new Error("Listing not found");
    // Send the listing as a JSON response
    return res.status(200).json(listing);
};

/**
 * Creates a new listing.
 *
 * @async
 * @function createListing
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request containing listing details.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The created listing object.
 */
const createListing = async (req, res) => {
    // Call the listing service to create a new listing.
    const listing = await listingService.createListing(req.body);
    // Send the created listing as a JSON response.
    return res.status(201).json(listing);
};

/**
 * Updates a listing with the given ID using the data provided in the request body.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the listing to update.
 * @param {Object} req.body - The data to update the listing with.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The updated listing if found.
 * @throws {Error} If the listing is not found.
 */
const updateListing = async (req, res) => {
    // Get the ID of the listing from the request parameters.
    const { id } = req.params;
    // Call the listing service to update the listing.
    const listing = await listingService.updateListing(id, req.body);
    // If the listing is not found, throw an error.
    if (listing) {
        // Send the updated listing as a JSON response.
        return res.status(200).json(listing);
    }
    // If the listing is not found, throw an error.
    throw new Error("Listing not found");
};

/**
 * Deletes a listing based on the provided ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the listing to delete.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with no content if the listing is deleted.
 * @throws {Error} - Throws an error if the listing is not found.
 */
const deleteListing = async (req, res) => {
    // Get the ID of the listing from the request parameters.
    const { id } = req.params;
    // Call the listing service to delete the listing.
    const listing = await listingService.deleteListing(id);
    // If the listing is found and deleted, send a 204 response
    if (listing) {
        // Send a 204 response.
        return res.status(204).send();
    }
    // If the listing is not found, throw an error.
    throw new Error("Listing not found");
};

// Export the controller functions
export default {
    getListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing,
};
