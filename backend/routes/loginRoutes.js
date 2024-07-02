const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginControllers");

// Route to handle contact form submission
router.post("/", loginController.login);

module.exports = router;
