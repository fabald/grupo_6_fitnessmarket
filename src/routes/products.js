const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController")

router.get("/home", productsController.home);

router.get("/products", productsController.listadoProd);

router.post("/products", productsController.store);

router.get("/products/create", productsController.create);

router.get("/productCart", productsController.productCart);

router.get("/productDetail/:id", productsController.productDetail);

module.exports = router;