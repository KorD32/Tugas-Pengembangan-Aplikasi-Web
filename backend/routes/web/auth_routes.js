const express = require('express');
const routes = express.Router();
const { login } = require('../../controllers/auth');
const userscontroller = require('../../controllers/users');
const authenticateToken = require('../../middlware/auth');

routes.post('/login', login);
routes.get('/:id', authenticateToken, userscontroller.userDetailByID);  

routes.get('/detail/:id', userscontroller.userDetailByID);

module.exports = routes;
