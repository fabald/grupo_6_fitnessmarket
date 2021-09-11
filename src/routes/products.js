const { trace } = require("console");
const express = require("express");
const router = express.Router();
const path = require("path");
const urlEncodedParser = express.urlencoded({ extended: false }); //tuve que hacer esto para que funcione POST
const productsController = require("../controllers/productsController")

router.get("/home", productsController.home);

router.get("/products", productsController.listadoProd);
router.post("/products/create", urlEncodedParser, productsController.store);

router.get("/products/create", productsController.create);

router.get("/productCart", productsController.productCart);

router.get("/productDetail/:id", productsController.productDetail);

router.get("/productDetail/:id/edit", productsController.edit);

router.put("/productDetail", (req, res) => res.send("Llega solicitud PUT"));

module.exports = router;

