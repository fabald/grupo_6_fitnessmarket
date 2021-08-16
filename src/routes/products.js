const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController")

router.get("/home", productsController.home);

router.get("/listadoProd", productsController.listadoProd);

router.get("/productCart", productsController.productCart);

router.get("/productDetail", productsController.productDetail);

module.exports = router;