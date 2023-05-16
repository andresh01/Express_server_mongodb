const { Router } = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createUser, getAllUsers, updateUser, deleteUser, getUser } = require('../controllers')
const { createUserValidation, updateUserValidation, deleteUserValidation, getUserValidation } = require('../validation/user.validation')

const route = new Router();

route.get("/health", (_, res) => res.send("check")); //sirve para evaluar el tiempo de respuesta y saber la eficiencia del servidor

const BASE = "/api/v1/users";

route.get(BASE, getAllUsers )
//route.get(`${BASE}?`, getUser)
route.post(BASE, validatorHandler(createUserValidation, 'body'), createUser) 
route.patch(`${BASE}?`,validatorHandler(updateUserValidation, 'query'), updateUser) 
route.delete(`${BASE}?`, validatorHandler(deleteUserValidation), deleteUser)




module.exports = route;