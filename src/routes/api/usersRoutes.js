const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

router.get('/users', userController.list);
router.get('/users/:id', userController.detail);

module.exports = router;