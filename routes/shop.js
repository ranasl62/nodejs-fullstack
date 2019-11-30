const path = require("path");
const express = require('express');
const rootDir = require('./../util/path');
const router = express.Router();
const Product = require('./../models/product');

router.get('/get-product', (req, res, next) => {

    try {
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    } catch (err) {
        return res.status(500).send({ message: 'Something wen wrong', status: "fail" });
    }
});

router.get('/', (req, res, next) => {

    try {
        console.log(".........................");
        Product.fetchAll(products => {
            console.log(products);
        })

        console.log(".........................");

        // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
        res.status(200).render('add-product', { layout: false, pageTitle: 'Add Product' });
    } catch (err) {
        return res.status(500).send({ message: 'Something wen wrong', status: "fail" });
    }
});

module.exports = router;