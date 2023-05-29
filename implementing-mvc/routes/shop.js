const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// shop read product data
router.get('/', productsController.getAllProducts);


module.exports = router;