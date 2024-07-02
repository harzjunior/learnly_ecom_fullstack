const bcrypt = require("bcrypt");
const Register = require("../models/registerModels");

// Controller function to handle user registration
const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const saltRounds = 10; // Number of salt rounds for bcrypt hashing

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    // Create a new user document
    const newUser = await Register.create({
      username: username,
      password: hashedPassword,
      email: email,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to get all registered users
const getAllUsers = async (req, res) => {
  try {
    const users = await Register.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  register,
  getAllUsers,
};
