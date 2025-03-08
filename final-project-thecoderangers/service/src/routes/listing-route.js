import { Router } from "express";
import listingController from "../controllers/listing-controller.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();    // Create a new router instance

// Route for fetching all listings and creating a new listing
router
    .route("/")
    .get(asyncHandler(listingController.getListings))
    .post(asyncHandler(listingController.createListing));

// Route for fetching, updating, or deleting a specific listing by ID
router
    .route("/:id")
    .get(asyncHandler(listingController.getListingById))
    .put(asyncHandler(listingController.updateListing))
    .delete(asyncHandler(listingController.deleteListing));

export default router;
