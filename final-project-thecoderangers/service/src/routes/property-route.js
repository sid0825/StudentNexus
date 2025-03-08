import { Router } from "express";
import propertyController from "../controllers/property-controller.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();    // Create a new Router instance

// Route for fetching all properties and creating a new property
router
    .route("/")
    .get(asyncHandler(propertyController.getProperties))
    .post(asyncHandler(propertyController.createProperty));

// Route for operations on a specific property by ID
router
    .route("/:id")
    .get(asyncHandler(propertyController.getPropertyById))
    .put(asyncHandler(propertyController.updateProperty))
    .delete(asyncHandler(propertyController.deleteProperty));

export default router;
