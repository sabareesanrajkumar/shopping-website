const path = require("path");
const rootDir = require("../util/path");

exports.getContactUsPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

exports.showSuccessPage = (req, res, next) => {
  res.redirect("/success");
};

exports.getSucessPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
