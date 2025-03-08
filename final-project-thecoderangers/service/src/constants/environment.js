import dotenv from "dotenv";
dotenv.config();

/**
 * @constant
 * @name ENVIRONMENT
 * @description Configuration constants for the application environment.
 * @property {Object} APP - Application configuration.
 * @property {string} APP.HOST - The host URL of the application.
 * @property {number} APP.PORT - The port number on which the application runs.
 * @property {Object} MONGO - MongoDB configuration.
 * @property {string} MONGO.DB_USERNAME - The username for MongoDB authentication.
 * @property {string} MONGO.DB_PASSWORD - The password for MongoDB authentication.
 * @property {string} MONGO.DB_NAME - The name of the MongoDB database.
 * @property {string} MONGO.DB_HOST - The host address of the MongoDB server.
 * @property {string} MONGO.DB_URI - The URI for connecting to MongoDB.
 * @property {Object} JWT - JSON Web Token configuration.
 * @property {string} JWT.ACCESS_TOKEN_SECRET - The secret key for signing access tokens.
 * @property {string} JWT.ACCESS_TOKEN_LIFE - The lifespan of access tokens.
 * @property {Object} NODE_MAILER - NodeMailer configuration for email services.
 * @property {string} NODE_MAILER.HOST - The host address of the email service.
 * @property {number} NODE_MAILER.PORT - The port number for the email service.
 * @property {string} NODE_MAILER.USER - The username for the email service.
 * @property {string} NODE_MAILER.PASS - The password for the email service.
 */
export const ENVIRONMENT = {
    // Application configuration
    APP: {
        HOST: process.env.HOST || "http://localhost",
        PORT: process.env.PORT || 3001,
    },
    // MongoDB configuration
    MONGO: {
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME,
        DB_HOST: process.env.DB_HOST,
        DB_URI: process.env.DB_URL,
    },
    // JSON Web Token configuration
    JWT: {
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
        ACCESS_TOKEN_LIFE: process.env.ACCESS_TOKEN_LIFE,
    },
    // NodeMailer configuration
    NODE_MAILER: {
        HOST: process.env.NODE_MAILER_HOST,
        PORT: process.env.NODE_MAILER_PORT,
        USER: process.env.NODE_MAILER_USER,
        PASS: process.env.NODE_MAILER_PASS,
    },
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    frontendURL: process.env.FRONTEND_URL,
    
};