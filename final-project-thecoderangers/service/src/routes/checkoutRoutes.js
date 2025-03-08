// /routes/checkoutRoutes.js


import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import checkoutController from "../controllers/checkoutController.js";

const router = Router(); 

router
  .route("/")
  .post(asyncHandler(checkoutController.createCheckoutSessionController));

// Define the POST route for creating a checkout session


export default router;
