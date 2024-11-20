const express = require("express");
const app = express();
const path = require("path");

const shopRoutes = require("./routes/shop");
const addProductRoutes = require("./routes/addproduct");
const contactUsRoutes = require("./routes/contactus");

const errorController = require("./controllers/error");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use(addProductRoutes);
app.use(contactUsRoutes);

app.use(errorController.get404);

app.listen(3000);
