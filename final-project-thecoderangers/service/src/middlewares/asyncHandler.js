/**
 * Middleware to handle asynchronous route handlers and middleware.
 * Wraps the provided function and ensures any errors are passed to the next middleware.
 *
 * @param {Function} fn - The asynchronous function to be wrapped.
 * @returns {Function} A function that takes req, res, and next as arguments and handles errors.
 */
const asyncHandler = (fn) => (req, res, next) => {
    // Wrap the provided function in a Promise and catch any errors.
    try {
        // Call the provided function and pass req, res, and next.
        return Promise.resolve(fn(req, res, next)).catch(next);
    } catch (err) {
        // If an error is thrown, pass it to the next middleware.
        next(err);
    }
};

// Export the asyncHandler middleware.
export default asyncHandler;