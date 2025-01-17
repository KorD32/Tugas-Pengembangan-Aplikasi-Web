const express = require('express');
const routes = express.Router();
const authenticateToken = require('../../middlware/auth');
const userscontroller = require('../../controllers/users')

routes.get('/', userscontroller.users);
routes.get('/:id ', authenticateToken, userscontroller.userDetailByID);

module.exports = routes;