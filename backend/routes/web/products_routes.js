const express = require("express");
const routes = express.Router();
const productsController = require("../../controllers/products");

routes.get("/category/:category", productsController.getProductsByCategory);
routes.get("/id/:id", productsController.getProductById);
routes.get("/recommended", productsController.getRecommendedProducts);

module.exports = routes;