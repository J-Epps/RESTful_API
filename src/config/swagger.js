// src/config/swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Title",
      version: "1.0.0",
      description: "Your API Description"
    }
  },
  apis: ["./src/routes/*.js"] // Path to the API route files
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  // Serve Swagger documentation
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
