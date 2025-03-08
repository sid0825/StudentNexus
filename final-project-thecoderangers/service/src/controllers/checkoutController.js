// /controllers/checkoutController.js
import { createCheckoutSession } from '../services/stripeService.js';

/**
 * Handles creating the Stripe checkout session.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */

const createCheckoutSessionController = async (req, res) => {
    try {
        console.log("Controller inside");
        const { listing } = req.body;
        const session = await createCheckoutSession(listing);
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error in checkoutController:", error);
        res.status(500).send("Internal Server Error");
    }
  };

  export default {createCheckoutSessionController};
