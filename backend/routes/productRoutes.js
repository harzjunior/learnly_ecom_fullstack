const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

// Route to add a new product
router.post("/", productController.addProduct);

// Route to get all products
router.get("/", productController.getAllProducts);

// Route to get a product by ID
router.get("/:id", productController.getProductById);

// Route to update a product by ID
router.put("/:id", productController.updateProductById);

// Route to delete a product by ID
router.delete("/:id", productController.deleteProductById);

module.exports = router;
