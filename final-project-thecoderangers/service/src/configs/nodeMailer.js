import nodemailer from "nodemailer";
import { ENVIRONMENT } from "../constants/environment.js";
/**
 * Creates a transporter object using the default SMTP transport.
 * 
 * @constant {Object} transporter - The transporter object for sending emails.
 * @property {string} host - The hostname or IP address to connect to (ENVIRONMENT.NODE_MAILER.HOST).
 * @property {number} port - The port to connect to (ENVIRONMENT.NODE_MAILER.PORT).
 * @property {Object} auth - The authentication object.
 * @property {string} auth.user - The username for authentication (ENVIRONMENT.NODE_MAILER.USER).
 * @property {string} auth.pass - The password for authentication (ENVIRONMENT.NODE_MAILER.PASS).
 */
const transporter = nodemailer.createTransport({
    host: ENVIRONMENT.NODE_MAILER.HOST,
    port: ENVIRONMENT.NODE_MAILER.PORT,
    auth: {
        user: ENVIRONMENT.NODE_MAILER.USER,
        pass: ENVIRONMENT.NODE_MAILER.PASS,
    },
});

export default transporter;
