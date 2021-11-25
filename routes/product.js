const express = require("express");
const router = express.Router();
router.use(express.json());

const productList = require("../models/product")

router.get("/",(req,res) => {
    res.json({data : productList});
});

module.exports = router;