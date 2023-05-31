const fs = require('fs');
const path = require('path');

const productFilePath = path.join
(path.dirname(require.main.filename), 
'data', 
'products.json'
);  

const getProductsFromFile = cb => {      
    fs.readFile(productFilePath, (err, fileContent) => {
        if(err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });  
}


module.exports = class Product {
    constructor(title, description, price, img) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productFilePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);    
    }
}