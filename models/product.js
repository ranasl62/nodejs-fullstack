const fs = require('fs');
const path = require('path');
const rootDir = require('./../util/path');
// const products = [];
const p = path.join(rootDir, 'data', 'products.json');
module.exports = class Product {

    constructor(title) {
        this.title = title;
    }
    save(product) {
        try {
            fs.readFile(p, (err, fileContent) => {
                let products = [];
                if (!err) {
                    products = JSON.parse(fileContent);
                }
                console.log(product);

                products.push(product);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);

                });

            });
        } catch (err) {
            console.log(err);

        }
        // products.push(product);
    }
    static fetchAll(cb) {
        try {
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    cb([]);
                }
                cb(JSON.parse(fileContent));
            });
        } catch (err) {
            console.log(err);

        }
    }
}