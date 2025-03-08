import mongoose from "mongoose";

// Define the schema for a Property
/**
 * Property Schema
 * 
 * @typedef {Object} Property
 * @property {string} propertyName - Name of the property
 * @property {string[]} photos - Array of photos related to the property
 * @property {string} description - Description of the property
 * @property {Object} location - Location details for the property
 * @property {string} location.unit - Unit number of the property
 * @property {string} location.streetNumber - Street number of the property
 * @property {string} location.streetName - Street name of the property
 * @property {string} location.city - City where the property is located
 * @property {string} location.neighborhood - Neighborhood where the property is located
 * @property {string} location.state - State where the property is located
 * @property {Object} location.coordinates - Coordinates of the property
 * @property {string} location.coordinates.latitude - Latitude of the property
 * @property {string} location.coordinates.longitude - Longitude of the property
 * @property {Date} availableDate - Available date for the property
 * @property {number} rent - Rent per month for the property
 * @property {Object} fees - Fees associated with renting the property
 * @property {number} fees.BrokerFee - Broker fee
 * @property {number} fees.FirstMonth - First month's rent
 * @property {number} fees.LastMonth - Last month's rent
 * @property {number} fees.SecurityDeposit - Security deposit
 * @property {string} propertyType - Type of property (Apartment, House, Townhouse, Condo)
 * @property {number} beds - Number of bedrooms
 * @property {number} baths - Number of bathrooms
 * @property {string[]} rentIncludes - Utilities included in the rent (Heat, Hot Water, Gas, None)
 * @property {string} laundry - Laundry options (In Unit, In Building, None)
 * @property {string} pet - Pet policy (Yes, No, With Restrictions)
 * @property {string[]} university - Universities near the property
 * @property {number} distance - Distance from the university in miles
 * @property {number} squareFootage - Square footage of the property
 * @property {string} status - Status of the property (Active, Inactive)
 * @property {Array} features - Additional features of the property
 */
const propertySchema = new mongoose.Schema({
// Name of the property
    propertyName: {
        type: String,
        required: [true, "Please enter your property name"],
        trim: true,
    },
// Array of photos related to the property
    photos: [{ type: String }],
    description: {
        type: String,
        trim: true,
    },
// Location details for the property
    location: {
        unit: {
            type: String,
            required: [true, "Please enter your unit"],
            trim: true,
        }, //"9",
        streetNumber: {
            type: String,
            required: [true, "Please enter your streetNumber"],
            trim: true,
        }, //"259",
        streetName: {
            type: String,
            required: [true, "Please enter your streetName"],
            trim: true,
        }, //"West Newton",
        city: {
            type: String,
            required: [true, "Please enter your city"],
            trim: true,
        }, //"Boston",
        neighborhood: {
            type: String,
            required: [true, "Please enter your neighborhood"],
            trim: true,
        }, //"Back Bay",
        state: {
            type: String,
            required: [true, "Please enter your state"],
            trim: true,
        }, //"MA",
        coordinates: {
            latitude: {
                type: String,
            },
            longitude: {
                type: String,
            },
        },
    },
// Available date for the property
    availableDate: {
        type: Date,
        required: [true, "Please enter your available date"],
    },
// Rent per month for the property
    rent: {
        type: Number,
        required: [true, "Please enter your rent per month"],
    },
// Fees associated with renting the property
    fees: {
        BrokerFee: { type: Number },
        FirstMonth: { type: Number },
        LastMonth: { type: Number },
        SecurityDeposit: { type: Number },
    },
// Type of property
    propertyType: {
        type: String,
        enum: ["Apartment", "House", "Townhouse", "Condo"],
    },
// Number of bedrooms
    beds: {
        type: Number,
        required: [true, "Please enter your beds"],
        min: 1,
        max: 10,
    },
// Number of bathrooms
    baths: {
        type: Number,
        required: [true, "Please enter your baths"],
        min: 1,
        max: 10,
    },
// Utilities included in the rent
    rentIncludes: [{ type: String, enum: ["Heat", "Hot Water", "Gas", "None"] }],
    laundry: { type: String, enum: ["In Unit", "In Building", "None"] },
    pet: { type: String, enum: ["Yes", "No", "With Restrictions"] },
    university: [
        {
            type: String,
            required: [true, "Please enter your university"],
        },
    ],
    distance: { type: Number }, //miles from university
    squareFootage: { type: Number }, // sqft
    status: { type: String, enum: ["Active", "Inactive"] },
// Additional features of the property
    features: [],
});

export default mongoose.model("Property", propertySchema);
