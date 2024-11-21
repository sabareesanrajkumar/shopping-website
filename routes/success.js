const express = require("express");
const router = express.Router();
const successPageController = require("../controllers/success");

router.post("/success", successPageController.getSuccessPage);

module.exports = router;
