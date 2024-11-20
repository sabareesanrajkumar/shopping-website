const express = require("express");
const router = express.Router();
const addProductController = require("../controllers/products");

router.get(`/add-product`, addProductController.getAddProduct);

module.exports = router;
