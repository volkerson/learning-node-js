const adminData = require('../routes/admin');
const Product = require('../models/products');

/*
 * ADMIN
*/

// admin: product overview - read product data
exports.getAllProductsAdmin = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', { 
            items: products, 
            pageTitle: 'Admin Product Index', 
            path: 'adminProducts',
            hasProducts: products.length > 0
        });
    });
}


// admin: add new product
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { 
        pageTitle: 'Add product', 
        path: 'addProduct'
    });
}

// admin: edit product
exports.getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', { 
        pageTitle: 'Edit product', 
        path: 'editProduct'
    });
}

// admin: add new products / form action
exports.postNewProduct = (req, res, next) => {
    const product = new Product(req.body.product__name, req.body.product__description, req.body.product__price, req.body.product__imgurl);
    product.save();
    res.redirect('/');
}

/*
 * SHOP
*/


// shop: product overview - read product data
exports.getProductList = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            items: products, 
            pageTitle: 'Product Overview',
            path: 'products',
            hasProducts: products.length > 0
        });
    });
}


// shop: product overview - read product data
exports.getProductIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            items: products, 
            pageTitle: 'Product Overview',
            path: 'shopIndex',
            hasProducts: products.length > 0
        });
    });
}


