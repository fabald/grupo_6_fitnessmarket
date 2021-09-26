const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const usersController = require("../controllers/usersController");

router.get("/login", usersController.login);

router.get("/register", usersController.register);

module.exports = router;