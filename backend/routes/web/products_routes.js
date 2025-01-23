const express = require('express');
const routes = express.Router();
const productsController = require('../../controllers/products');

routes.get('/:category', productsController.getProductsByCategory);

module.exports = routes;
