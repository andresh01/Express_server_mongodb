const { Router } = require("express");
const { createProductValidation, updateProductValidation, getProductValidation, deleteProductValidation } = require("../validation/product.validation")
const validatorHandler = require("../middlewares/validator.handler");
const { getAllProducts, getProductById, addNewProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");

const routes = new Router();

routes.get("/health", (_, res) => res.send("check")); //sirve para evaluar el tiempo de respuesta y saber la eficiencia del servidor

const BASE = "/api/v1/products";

routes.get(BASE, getAllProducts )

routes.get(`${BASE}/:id`, validatorHandler(getProductValidation, "params"), getProductById)

routes.post(BASE, validatorHandler(createProductValidation, "body"), addNewProduct) 

routes.patch(`${BASE}/:id`, validatorHandler(updateProductValidation, "params"), updateProduct)

routes.delete(`${BASE}/:id`, validatorHandler(deleteProductValidation, "params"), deleteProduct)


module.exports = routes;