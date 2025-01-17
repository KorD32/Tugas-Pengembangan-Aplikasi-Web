const express = require('express');
const routes = express.Router();
const authenticateToken = require('../../middlware/auth');
const usersController = require('../../controllers/users')


routes.get('/', usersController.users);
routes.get('/:id ', authenticateToken, usersController.userDetailByID);
routes.post('/register', usersController.registerUser);
routes.put('update/:id', usersController.updateUser);

module.exports = routes;