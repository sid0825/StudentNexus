import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs"; // by yaml
import Stripe from "stripe";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
/**
 * Initializes the Express app with necessary middleware and routes.
 * @returns {Object} The initialized Express app.
 */



const stripe = (process.env.STRIPE_SECRET_KEY);
const initialize = () => {
  // Initialize Express app
  const app = express();
  // Middleware
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(bodyParser.json());
  // swagger
  const swaggerDocumentUser = YAML.load("./documentation/swagger/V2/Users API.yaml"); // by yaml
  const swaggerDocumentUniversity = YAML.load("./documentation/swagger/V2/University API.yaml"); // by yaml
  app.use(
    "/api-docs/users",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentUser, swaggerDocumentUniversity, { customSiteTitle: "studentnexus" })
  );


  app.use(
    "/api-docs/university",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentUniversity, { customSiteTitle: "studentnexus" })
  );

  const swaggerDocumentProperty = YAML.load("./documentation/swagger/V2/Property API.yaml"); // by yaml
  app.use(
    "/api-docs/property",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentProperty, { customSiteTitle: "studentnexus" })
  );

  const swaggerDocumentListing = YAML.load("./documentation/swagger/V2/Listing API.yaml"); // by yaml
  app.use(
    "/api-docs/listing",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentListing, { customSiteTitle: "studentnexus" })
  );

  app.use(morgan("dev")); //"combined" //   morgan format

  // routes
  // app.use("/api/v1", routes);
  routes(app);

  app.post("/create-checkout-session", async (req, res) => {
    const { listing } = req.body; // Expecting listing data in the request body

    if (!listing || !listing.price || !listing.address) {
        return res.status(400).send("Invalid listing data.");
    }

    try {
        // Create a checkout session
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
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });

        // Return the session ID to the frontend
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session", error);
        res.status(500).send("Internal Server Error");
    }
});

  // default route
  app.get("/", (req, res) => {
    res.send("Service is healthy").status(200);
  });

  return app;
};

// Export the initialize function
export default initialize;
