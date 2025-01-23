const productModel = require("../models/products_models")

async function getProductsByCategory(req, res) {
    const { category } = req.params;
    try {
        const products = await productModel.getProductsByCategory(category);
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getProductsByCategory };
