const express = require('express');
const routes = express.Router();
const usersRoutes = require('./web/users_routes');
const authRoutes = require('./web/auth_routes');
const productsRoutes = require('./web/products_routes');
const orderdetailRoutes = require('./web/orderdetail_routes');

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/products', productsRoutes);
routes.use('/orderdetail', orderdetailRoutes);


module.exports = routes;
