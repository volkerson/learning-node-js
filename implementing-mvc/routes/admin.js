const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');


// admin: add new prooduct page
router.get('/add-product', productsController.getAddProduct);

// admin: post new product - form action
router.post('/add-product', productsController.postNewProduct);


module.exports = router;