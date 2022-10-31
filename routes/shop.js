const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("../routes/admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'My-Shop', path: '/'});
});

module.exports = router;
