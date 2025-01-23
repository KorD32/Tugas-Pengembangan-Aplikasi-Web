const productModel = require("../models/products_models");

async function getProductsByCategory(req, res) {
    const { category } = req.params;
    try {
        const products = await productModel.getProductsByCategory(category);
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found in this category" });
        }
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getProductById(req, res) {
    const { id } = req.params;
    try {
        const [product] = await productModel.getProductsById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getRecommendedProducts(req, res) {
    try {
        const limit = parseInt(req.query.limit) || 5; // Default limit = 3
        const products = await productModel.getRandomProducts(limit);
        res.json(products);
    } catch (error) {
        console.error("Error fetching recommended products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getProductsByCategory, getProductById, getRecommendedProducts };