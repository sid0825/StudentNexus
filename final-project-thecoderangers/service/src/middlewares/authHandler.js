import jwt from "jsonwebtoken";
import { ENVIRONMENT } from "../constants/environment.js";
/**
 * Middleware to handle authentication.
 * 
 * This middleware checks for the presence of an authorization header in the request,
 * verifies the token, and attaches the decoded token to the request object.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * 
 * @returns {Object} - Returns a 401 status with an error message if authentication fails.
 */
const authHandler = (req, res, next) => {
    // Check for the presence of the authorization header
    try {
        // Check for the presence of the authorization header
        const authHeader = req.header("authorization");
        // If the authorization header is not present, return a 401 status
        if (!authHeader)
            return res.status(401).send({
                message: "Access Denied",
            });
        // Split the authorization header to get the token
        const tokenArr = authHeader.split("Bearer ");
        // If the token is not present, return a 401 status
        if (tokenArr.length != 2)
            return res.status(401).send({
                message: "Access Denied",
            });
        // Get the token from the token array
        const token = tokenArr[1];
        let decodedToken;
        // Verify the token
        decodedToken = jwt.verify(token, ENVIRONMENT.JWT.TOKEN_SECRET);
        // If the token is invalid, return a 401 status
        if (!decodedToken)
            return res.status(401).send({
                message: "Access Denied",
            })();
        // Attach the decoded token to the request object
        req.decodedToken = decodedToken;
        next();
    } catch (err) {
        // If an error occurs, return a 401 status
        return res.status(401).send({
            message: err.message,
        });
    }
};

// Export the authHandler middleware
export default authHandler;
