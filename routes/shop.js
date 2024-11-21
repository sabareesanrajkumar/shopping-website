const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");
const productController = require("../controllers/products");

router.get(`/`, shopController.openShop);
router.get("/", productController.getProducts);

module.exports = router;
