const { Router } = require("express");
const { createUser, getAllUsers } = require('../controllers/users.controllers')

const routesUsers = new Router();

routesUsers.get("/health", (_, res) => res.send("check")); //sirve para evaluar el tiempo de respuesta y saber la eficiencia del servidor

const BASE = "/api/v1/users";

routesUsers.get(BASE, getAllUsers )

routesUsers.post(BASE, createUser) 



module.exports = routesUsers;