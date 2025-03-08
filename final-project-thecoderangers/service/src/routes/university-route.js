import { Router } from "express";
import universityController from "../controllers/university-controller.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();  // Create a new Router instance

// Route for fetching all universities and creating a new university
router
  .route("/")
  .get(asyncHandler(universityController.getUniversities))
  .post(asyncHandler(universityController.createUniversity));

  // Route for operations on a specific university by ID
router
  .route("/:id")
  .get(asyncHandler(universityController.getUniversityById))
  .put(asyncHandler(universityController.updateUniversity))
  .delete(asyncHandler(universityController.deleteUniversity));
export default router;
