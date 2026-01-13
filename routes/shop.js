const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

router.get("/", productsController.getShopProduct);

module.exports = router;