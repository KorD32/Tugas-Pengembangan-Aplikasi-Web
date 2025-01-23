const express = require("express");
const routes = express.Router();
const { createOrder, getUserOrders } = require("../../controllers/orderdetail");

routes.post("/create", createOrder); 
routes.get("/:user_id", getUserOrders); 

module.exports = routes;