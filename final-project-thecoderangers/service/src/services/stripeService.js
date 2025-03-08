// /services/stripeService.js

import Stripe from 'stripe';
import dotenv from "dotenv";
dotenv.config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const frontendURL = process.env.FRONTEND_URL;
const stripe = new Stripe(stripeSecretKey);

/**
 * Creates a checkout session for the listing.
 * @param {Object} listing - The listing data containing address and price.
 * @returns {Promise<Object>} The Stripe session object.
 */
export async function createCheckoutSession(listing) {
    if (!listing || !listing.price || !listing.address) {
        throw new Error("Invalid listing data");
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd", // Change to your preferred currency
                        product_data: {
                            name: listing.address,
                        },
                        unit_amount: listing.price * 100, // Price in cents (Stripe requires this format)
                    },
                    quantity: 1,
                },
            ],
            mode: "payment", // Can also be 'subscription' if you're handling subscriptions
            success_url: `${frontendURL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${frontendURL}/`,
        });

        return session;
    } catch (error) {
        console.error("Error creating checkout session", error);
        throw new Error("Stripe session creation failed");
    }
}
