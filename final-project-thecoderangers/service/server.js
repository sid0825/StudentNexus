import { ENVIRONMENT } from "./src/constants/environment.js";
import dbConnect from "./src/configs/mongoDbConfig.js";
import initialize from "./src/app.js";
import errorHandler from "./src/middlewares/errorHandler.js";

// Initialize database connection
dbConnect();
// Initialize app
const app = initialize();
// Listen to port
app.listen(ENVIRONMENT.APP.PORT, () => {
  console.log(`Server listening at http://localhost:${ENVIRONMENT.APP.PORT}`);
});
app.use(errorHandler);
