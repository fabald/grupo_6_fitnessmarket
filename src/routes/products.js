const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController")

router.get("/home", productsController.home);

router.get("/products", productsController.listadoProd);

router.post("/products", (req, res) => {
    
    res.send(req.body.nombre)
    
});

router.get("/products/create", productsController.create);

router.get("/productCart", productsController.productCart);

router.get("/productDetail/:id", productsController.productDetail);

router.get("/products/:id/edit", productsController.edit);

router.put("/products/:id/actualizar", productsController.actualizar);

module.exports = router;