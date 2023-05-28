const User = require("../models/user");

// Example test suite for User model
describe("User Model", () => {
  // Example test case for user validation
  it("should validate user data", async () => {
    // Create a valid user object
    const validUser = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123"
    };

    // Create a user with valid data
    const user = new User(validUser);

    // Save the user to the database
    const savedUser = await user.save();

    // Assertion: Check if the saved user matches the provided data
    expect(savedUser.name).toBe(validUser.name);
    expect(savedUser.email).toBe(validUser.email);
    expect(savedUser.password).toBe(validUser.password);

    // Assertion: Check if the timestamps were added correctly
    expect(savedUser.createdAt).toBeDefined();
    expect(savedUser.updatedAt).toBeDefined();

    // Assertion: Check if the ID was assigned
    expect(savedUser._id).toBeDefined();
  });

  // More test cases for model-specific operations can be added here
});
