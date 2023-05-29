const adminData = require('../routes/admin');
const Product = require('../models/products');


// admin: add new product
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { 
        pageTitle: 'Add product', 
        path: 'addProduct'
    });
}

// admin: add new products / form action
exports.postNewProduct = (req, res, next) => {
    const product = new Product(req.body.product__name, req.body.product__description, req.body.product__price, req.body.product__imgurl);
    product.save();
    res.redirect('/');
}

// shop: product overview - read product data
exports.getAllProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', { 
            items: products, 
            pageTitle: 'Shop Index', 
            path: 'shopIndex',
            hasProducts: products.length > 0
        });
    });
}