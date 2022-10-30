const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-products", (req, res, next) => {
  console.log("in form middleware");
  res.send(
    "<form action='/product' method='post'><input type='text' name='title'><button type='submit'>Add-Product</button></input></form>"
  );
  next();
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in home middleware");
  res.send("<h1>Hello from expressJs</h1>");
  next();
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
