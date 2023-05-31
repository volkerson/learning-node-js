const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const checkoutController = require('../controllers/checkout');

// shop read product data
router.get('/', productsController.getProductIndex);
router.get('/product-list', productsController.getProductList);

// shop - checkout: cart
router.get('/cart', checkoutController.getCart);

// shop - orders
router.get('/orders', checkoutController.getOrders);


module.exports = router;