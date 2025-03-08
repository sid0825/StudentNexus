import listingModel from "../models/listing-model.js";

/**
 * Retrieves all listings from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of listings.
 */
const getListing = async () => {
    // Return all listings from the database
    return await listingModel.find();
};

/**
 * Retrieves a listing by its ID.
 *
 * @param {string} id - The ID of the listing to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the listing object if found, or null if not found.
 */
const getListingById = async (id) => {
    // Return the listing with the provided ID
    return await listingModel.findById(id);
};

/**
 * Creates a new listing in the database.
 *
 * @param {Object} listing - The listing object to be created.
 * @returns {Promise<Object>} The created listing object.
 */
const createListing = async (listing) => {
    // Create a new listing with the provided details
    return await listingModel.create(listing);
};

/**
 * Updates a listing with the given id and new listing details.
 *
 * @param {string} id - The ID of the listing to update.
 * @param {Object} listing - The update listing details.
 * @returns {Promise<Object>} The updated listing.
 */
const updateListing = async (id, listing) => {
    // Find the listing by its ID
    const { propertyId, tenants, propertyGenderPreference, spotsAvailable } =
        listing;
    // Update the listing with the new details
    const updateListing = await listingModel.findById(id);
    // Update the listing with the new details
    if (propertyId) {
        updateListing.propertyId = propertyId;
    }
    // Update the listing with the new details
    if (tenants) {
        updateListing.tenants = tenants;
    }
    // Update the listing with the new details
    if (propertyGenderPreference) {
        updateListing.propertyGenderPreference = propertyGenderPreference;
    }
    // Update the listing with the new details
    if (spotsAvailable) {
        updateListing.spotsAvailable = spotsAvailable;
    }
    // Save the updated listing
    return await updateListing.save();
};

/**
 * Deletes a listing by its ID.
 *
 * @param {string} id - The ID of the listing to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the deleted listing object, or null if no listing was found.
 */
const deleteListing = async (id) => {
    // Delete the listing with the provided ID
    return await listingModel.findByIdAndDelete(id);
};

// Export the functions to be used in other modules
export default {
    getListing,
    getListingById,
    createListing,
    updateListing,
    deleteListing,
};
