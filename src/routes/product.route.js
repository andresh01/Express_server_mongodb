const { Router } = require("express");
const { createProductValidation, updateProductValidation, getProductValidation, deleteProductValidation } = require("../validation/product.validation")
const { validatorHandler } = require("../middlewares");
const { Product } = require("../controllers");

const routes = new Router();

routes.get("/health", (_, res) => res.send("check")); //sirve para evaluar el tiempo de respuesta y saber la eficiencia del servidor

const BASE = "/api/v1/products";

routes.get(BASE, Product.getAllProducts )

routes.get(`${BASE}/:id`, validatorHandler(getProductValidation, "params"), Product.getProductById)

routes.post(BASE, validatorHandler(createProductValidation, "body"), Product.addNewProduct) 

routes.patch(`${BASE}/:id`, validatorHandler(updateProductValidation, "params"), Product.updateProduct)

routes.delete(`${BASE}/:id`, validatorHandler(deleteProductValidation, "params"), Product.deleteProduct)


module.exports = routes;