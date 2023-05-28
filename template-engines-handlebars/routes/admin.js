const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { pageitle: 'Add product', addNewProdcut: true} )
});

router.post('/add-product', (req, res, next) => {
    products.push( { 
        product__name: req.body.product__name, 
        product__price: req.body.product__price, 
        product__description: req.body.product__description, 
        product__imgurl: req.body.product__imgurl
    });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;