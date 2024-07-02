const Product = require("../models/productModels");

// Controller function to add a new product
const addProduct = async (req, res) => {
  const { name, description, price, imageURL } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      imageURL,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to get a product by ID
const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to update a product by ID
const updateProductById = async (req, res) => {
  const productId = req.params.id;
  const { name, description, price, imageURL } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, imageURL },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to delete a product by ID
const deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
