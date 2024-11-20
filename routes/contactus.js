const express = require("express");
const router = express.Router();
const contactUsController = require("../controllers/contactus");

router.get(`/contactus`, contactUsController.getContactUsPage);

router.post(`/contactus`, contactUsController.showSuccessPage);

router.post("/success", contactUsController.getSucessPage);
module.exports = router;
