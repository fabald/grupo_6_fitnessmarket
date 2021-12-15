const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/productController');


router.get('/products', productController.list);
router.get('/products/:id', productController.detail);

module.exports = router;