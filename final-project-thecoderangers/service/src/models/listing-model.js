import mongoose from "mongoose";

// Define the schema for a Listing
/**
 * Listing Schema
 * 
 * @typedef {Object} Listing
 * @property {mongoose.Schema.Types.ObjectId} propertyId - Reference to the Property model
 * @property {Array.<mongoose.Schema.Types.ObjectId>} tenants - Array of tenant references, referencing the User model
 * @property {String} propertyGenderPreference - Gender preference for the property, can be "Mixed", "Male", or "Female"
 * @property {Array.<Object>} spotsAvailable - Array of spots available in the property
 * @property {String} spotsAvailable.spotType - Type of spot, e.g., "Private Room", "Shared Room", "Hall Spot"
 * @property {String} spotsAvailable.lease - Lease type, e.g., "Onlease", "Temporary"
 * @property {String} spotsAvailable.gender - Gender preference for the spot, can be "Male" or "Female"
 * @property {Number} spotsAvailable.rent - Rent per month for the spot
 * @property {Number} spotsAvailable.utilities - Utilities cost per month for the spot
 * @property {String} spotsAvailable.photo - Photo URL of the spot
 */
const listingSchema = new mongoose.Schema({
// Reference to the Property model
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
    },
// Array of tenant references
    tenants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
// Gender preference for the property
    propertyGenderPreference: {
        type: String,
        enum: ["Mixed", "Male", "Female"],
    },
// Array of spots available in the property
    spotsAvailable: [
        {
            spotType: { type: String }, // "Private Room", "Shared Room", "Hall Spot",
            lease: { type: String }, //"Onlease","Temporary"
            gender: { type: String, enum: ["Male", "Female"] },
            rent: { type: Number }, // per month
            utilities: { type: Number }, // per month
            photo: { type: String },
        },
    ],
});

export default mongoose.model("Listing", listingSchema);
