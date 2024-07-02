// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const registerRoutes = require("./routes/registerRoutes");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./utils/db.js");
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/user", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/products", productRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
