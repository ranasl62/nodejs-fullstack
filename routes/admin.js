const express = require('express')
const path = require('path');
const router = express.Router();
const rootDir = require('./../util/path')

router.get('/add-product', (req, res, next) => {
    try {
        res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    } catch (e) {
        return res.status(500).send({ message: 'Something wen wrong', status: "fail" });
    }

});

module.exports = router;