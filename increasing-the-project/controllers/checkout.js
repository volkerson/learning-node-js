// checkout: cart
exports.getCart = (req, res, next) => {
    res.render('shop/cart', { 
        pageTitle: 'Cart', 
        path: 'cart'
    });
}

// checkout: orders
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { 
        pageTitle: 'Orders', 
        path: 'orders'
    });
}
