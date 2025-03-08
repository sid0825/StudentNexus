// Middleware to handle errors globally in the Express application
/**
 * Middleware function to handle errors in the application.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const errorHandler = (err, req, res, next) => {
    // Log the error to the console
    console.error(err);
    // Return a 500 status with an error message
    res.status(500).send({ error: err.message });
};

// Export the errorHandler middleware
export default errorHandler;
