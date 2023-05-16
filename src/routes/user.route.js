const { Router } = require("express");
const { validatorHandler } = require("../middlewares");
const { createUserValidation, updateUserValidation, deleteUserValidation, getUserValidation } = require('../validation/user.validation')
const { User } = require('../controllers')
const route = new Router();

route.get("/health", (_, res) => res.send("check")); //sirve para evaluar el tiempo de respuesta y saber la eficiencia del servidor

const BASE = "/api/v1/users";

route.get(BASE, User.getAllUsers )
//route.get(`${BASE}?`, getUser)
route.post(BASE, validatorHandler(createUserValidation, 'body'), User.createUser) 
route.patch(`${BASE}?`,validatorHandler(updateUserValidation, 'query'), User.updateUser) 
route.delete(`${BASE}?`, validatorHandler(deleteUserValidation), User.deleteUser)




module.exports = route;