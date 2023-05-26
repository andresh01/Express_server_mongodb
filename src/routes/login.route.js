const { Router } = require("express");
const routes = new Router();
const { login, restrictedView } = require("../controllers/auth.controller");
const { isAuth } = require("../middlewares/auth.handler")


const BASE = "/api/v1";

routes.get(`${BASE}/login`, login);
routes.post(`${BASE}/auth`, isAuth, restrictedView );


module.exports = routes;