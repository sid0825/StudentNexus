import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ENVIRONMENT } from "../constants/environment.js";

// Define the schema for the User collection
/**
 * User Schema
 * 
 * This schema defines the structure of the user document in the MongoDB database.
 * 
 * @typedef {Object} User
 * @property {String} firstName - The first name of the user. Required.
 * @property {String} lastName - The last name of the user. Required.
 * @property {String} email - The email address of the user. Required and unique.
 * @property {String} password - The password of the user. Required.
 * @property {String} phone - The phone number of the user.
 * @property {String} homeTown - The hometown of the user.
 * @property {mongoose.Schema.Types.ObjectId} university - The university the user is associated with. References the University model.
 * @property {String} major - The major of the user.
 * @property {String} intake - The intake period of the user.
 * @property {Number} workExperience - The work experience of the user in years.
 * @property {String[]} previousEducation - The previous education details of the user.
 * @property {String} aboutMe - A brief description about the user.
 * @property {String} photo - The URL of the user's photo.
 * @property {mongoose.Schema.Types.ObjectId[]} listings - The listings associated with the user. References the Listing model.
 * @property {Object} preferences - The user's preferences for housing.
 * @property {Number} preferences.rent - The preferred rent amount.
 * @property {String} preferences.dietary - The dietary preferences of the user.
 * @property {String} preferences.spotType - The type of spot preferred by the user. Can be "Private Room", "Shared Room", "Hall Spot", or "Any".
 * @property {String} preferences.smoking - The smoking preference. Can be "Yes", "No", or "Any".
 * @property {String} preferences.drinking - The drinking preference. Can be "Yes", "No", or "Any".
 * @property {Number} preferences.beds - The number of beds preferred. Minimum 0, maximum 10.
 * @property {Number} preferences.baths - The number of baths preferred. Minimum 0, maximum 10.
 * @property {String} preferences.laundry - The laundry preference. Can be "In Unit", "In Building", or "Any".
 * @property {String} preferences.pet - The pet preference. Can be "Yes", "No", or "With Restrictions".
 * @property {Number} preferences.distance - The preferred distance from the university in miles.
 * @property {String[]} preferences.rentInclude - The utilities included in the rent. Can be "Heat", "Hot Water", "Gas", or "Any".
 * @property {Array} preferences.features - Additional features preferred by the user.
 * @property {Object} resetToken - The reset token for password recovery.
 * @property {Number} resetToken.token - The reset token value.
 * @property {Date} resetToken.expires - The expiration date of the reset token.
 * @property {Date} createdAt - The date when the user document was created. Automatically managed by Mongoose.
 * @property {Date} updatedAt - The date when the user document was last updated. Automatically managed by Mongoose.
 */
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    homeTown: {
      type: String,
      trim: true,
    },
    university: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
    },
    major: {
      type: String,
      trim: true,
    },
    intake: { type: String },
    workExperience: { type: Number },
    previousEducation: [{ type: String }],
    aboutMe: {
      type: String,
      trim: true,
    },
    photo: { type: String },
    listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
      },
    ],
// User's preferences for housing
    preferences: {
      rent: { type: Number },
      dietary: { type: String },
      spotType: {
        type: String,
        enum: ["Private Room", "Shared Room", "Hall Spot", "Any"],
      },
      smoking: { type: String, enum: ["Yes", "No", "Any"] },
      drinking: { type: String, enum: ["Yes", "No", "Any"] },
      beds: { type: Number, min: 0, max: 10 },
      baths: { type: Number, min: 0, max: 10 },
      laundry: { type: String, enum: ["In Unit", "In Building", "Any"] },
      pet: { type: String, enum: ["Yes", "No", "With Restrictions"] },
      distance: { type: Number }, //miles from university
      rentInclude: [
        { type: String, enum: ["Heat", "Hot Water", "Gas", "Any"] },
      ],
      features: [],
    },
    resetToken: { token: { type: Number }, expires: { type: Date } },
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving user
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate tokens
userSchema.methods.generateTokens = async function () {
  const accessToken = jwt.sign(
    { _id: this._id },
    ENVIRONMENT.JWT.ACCESS_TOKEN_SECRET,
    { expiresIn: ENVIRONMENT.JWT.ACCESS_TOKEN_LIFE }
  );
  return accessToken;
};

// Generate reset password token
userSchema.methods.generateResetPasswordToken = async function () {
  const resetToken = Math.floor(100000 + Math.random() * 900000); // 6-digit number
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes
  this.resetToken = { token: resetToken, expires };
  await this.save();
  return resetToken;
};

export default mongoose.model("User", userSchema);
