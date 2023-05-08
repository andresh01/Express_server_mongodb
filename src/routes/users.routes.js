const { Router } = require("express");
const { createUser, getAllUsers } = require('../controllers')

const route = new Router();

route.get("/health", (_, res) => res.send("check")); //sirve para evaluar el tiempo de respuesta y saber la eficiencia del servidor

const BASE = "/api/v1/users";

route.get(BASE, getAllUsers )

route.post(BASE, createUser) 



module.exports = route;