import mongoose from "mongoose";
import { ENVIRONMENT } from "../constants/environment.js";

/**
 * Establishes a connection to the MongoDB database using the provided environment variables.
 * 
 * @async
 * @function dbConnect
 * @throws Will throw an error if the connection to MongoDB fails.
 * @returns {Promise<void>} A promise that resolves when the connection is successfully established.
 */
async function dbConnect() {
    // Extract the MongoDB connection details from the environment variables
    const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = ENVIRONMENT.MONGO;
    // Construct the MongoDB connection URI
    const mongoURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
    // Configure the connection options
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    // Attempt to connect to MongoDB
    try {
        // Log a message indicating that the connection is being attempted
        console.log("Attempting to connect to MongoDB...");
        // Establish the connection to MongoDB
        await mongoose.connect(mongoURI, options);
        // Log a message indicating that the connection was successful
        console.log("MongoDB connection established successfully!");
    } catch (err) {
        // Log an error message if the connection fails
        console.error("MongoDB Connection Error:", err);
        // Exit process with failure
        process.exit(1);
    }
}

export default dbConnect;
