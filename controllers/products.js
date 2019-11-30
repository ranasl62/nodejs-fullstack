const Product = require('./../models/product');

exports.getAddProduct = (req, res, next) => {
    try {
        const product = new Product('dummy');
        product.save({ title: req.body.title });
        res.redirect('/shop');
    } catch (e) {
        return res.status(500).send({ message: `Something wen wrong with ${e}`, status: "fail" });
    }

};