import userRouter from "./user-route.js";
import universityRouter from "./university-route.js";
import propertyRouter from "./property-route.js";
import listingRouter from "./listing-route.js";
import authRouter from "./auth-route.js";
import { validateListing } from "../middlewares/validateListing.js";
import checkoutRoutes from './checkoutRoutes.js';

export default (app) => {
    // routes
    app.use("/user", userRouter);
    app.use("/university", universityRouter);
    app.use("/property", propertyRouter);
    app.use("/listing", listingRouter);
    app.use("/auth", authRouter);
    app.use("/checkout", checkoutRoutes);

};
