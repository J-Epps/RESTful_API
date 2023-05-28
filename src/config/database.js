// src/config/database.js

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the application on database connection failure
  }
};

module.exports = connectDatabase;
