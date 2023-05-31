const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// admin: products
router.get('/products', productsController.getAllProductsAdmin);


// admin: add new prooduct page
router.get('/add-product', productsController.getAddProduct);

// admin: post new product - form action
router.post('/add-product', productsController.postNewProduct);

// admin: edit product
router.get('/edit-product', productsController.getEditProduct);


module.exports = router;