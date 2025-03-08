import mongoose from "mongoose";

// Define the schema for the University collection
/**
 * University Schema
 * 
 * This schema defines the structure for the University model in the database.
 * 
 * @typedef {Object} UniversitySchema
 * @property {String} name - The name of the university.
 * @property {String} location - The location of the university.
 * @property {String} domain - The domain of the university. Must be unique.
 * 
 * @property {Date} createdAt - The date when the university record was created.
 * @property {Date} updatedAt - The date when the university record was last updated.
 */
const UniversitySchema = new mongoose.Schema(
  {
// Field for the name of the university
    name: {
      type: String,
      required: [true, "Please enter university name"],
      trim: true,
    },
// Field for the location of the university
    location: {
      type: String,
      required: [true, "Please enter university location"],
      trim: true,
    },
// Field for the domain of the university
    domain: {
      type: String,
      required: [true, "Please enter university domain"],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("University", UniversitySchema);
