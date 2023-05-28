// src/routes/index.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

// API routes
router.get("/users", authMiddleware, userController.getUsers);
router.post("/users", authMiddleware, userController.createUser);
router.get("/users/:id", authMiddleware, userController.getUserById);
router.put("/users/:id", authMiddleware, userController.updateUser);
router.delete("/users/:id", authMiddleware, userController.deleteUser);

module.exports = router;
