import { Router } from "express";
import userController from "../controllers/user-controller.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();  // Create a new Router instance

// Route for fetching all users and creating a new user
router
  .route("/")
  .get(asyncHandler(userController.getUsers))
  .post(asyncHandler(userController.createUser));

// Route for operations on a specific user by ID
router
  .route("/:id")
  .get(asyncHandler(userController.getUserById))
  .put(asyncHandler(userController.updateUser))
  .delete(asyncHandler(userController.deleteUser));

export default router;
