const path = require("path");
const express = require('express');
const rootDir = require('./../util/path');
const router = express.Router();


router.get('/get-product', (req, res, next) => {

    try {
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    } catch (err) {
        return res.status(500).send({ message: 'Something wen wrong', status: "fail" });
    }
});

module.exports = router;