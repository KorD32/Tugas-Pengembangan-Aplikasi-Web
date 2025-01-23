const express = require('express');
const routes = express.Router();
const authenticateToken = require('../../middlware/auth');
const usersController = require('../../controllers/users')


routes.get('/', usersController.users);
routes.get('/:id ', authenticateToken, usersController.userDetailByID);
routes.post('/register', usersController.registerUser);
routes.put('/update/:id', usersController.updateUser);
routes.put("/update-password/:id", usersController.updatePassword);
routes.delete("/delete/:id", usersController.deleteUser);

module.exports = routes;