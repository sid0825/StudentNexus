// /middlewares/validateListing.js
/**
 * Middleware to validate listing data.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export function validateListing(req, res, next) {
    const { listing } = req.body;

    if (!listing || !listing.price || !listing.address) {
        return res.status(400).send("Invalid listing data.");
    }

    next();
}
