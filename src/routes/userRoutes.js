// src/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");
const validateRequestMiddleware = require("../middleware/validation");
const userValidationSchema = require("../validations/userValidationSchema");

// User-specific routes
router.get("/:userId", authMiddleware, userController.getUsers);
router.put(
  "/:userId",
  authMiddleware,
  validateRequestMiddleware(userValidationSchema),
  userController.updateUser
);
router.delete("/:userId", authMiddleware, userController.deleteUser);

module.exports = router;
