// src/services/userService.js

const User = require("../models/user");

class UserService {
  async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  async getUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, {
        new: true
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}

module.exports = new UserService();
