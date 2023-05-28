require("dotenv").config();
const express = require("express");
const passport = require("passport");
const connectDatabase = require("./config/database");
const swaggerConfig = require("./config/swagger");
const logger = require("./utils/logger");

const app = express();

// Initialize Passport
app.use(passport.initialize());

// Connect to the database
connectDatabase();

// Other app setup, middleware, etc.

// Configure Swagger documentation
swaggerConfig(app);

// Mount routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/userRoutes");
const userService = require("./services/userService");

app.use("/", indexRoutes);
app.use("/users", userRoutes);

// Inject the userService into the user routes
userRoutes.use((req, res, next) => {
  req.userService = userService;
  next();
});

// Example usage of the logger
app.get("/", (req, res) => {
  logger.info("Received a request at the root endpoint");
  res.send("Hello, world!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
