const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get(`/contactus`, (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

router.post(`/contactus`, (req, res, next) => {
  res.redirect("/success");
});

router.post("/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});
module.exports = router;
