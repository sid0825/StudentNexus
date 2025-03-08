import { Router } from "express";
import authController from "../controllers/auth-controller.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();

// Routes
router.route("/register").post(asyncHandler(authController.register));
router.route("/login").post(asyncHandler(authController.login));
router
    .route("/forgotpassword")
    .post(asyncHandler(authController.forgotpassword));
router.route("/resetpassword").post(asyncHandler(authController.resetpassword));

export default router;
