const express = require("express");
const app = express();
const path = require("path");

const shopRoutes = require("./routes/shop");
const addProductRoutes = require("./routes/addproduct");
const contactUsRoutes = require("./routes/contactus");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use(addProductRoutes);
app.use(contactUsRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

app.listen(3000);
