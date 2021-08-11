const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController")

router.get("/", productsController.home);

module.exports = router;