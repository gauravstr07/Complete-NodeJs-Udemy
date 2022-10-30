const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 5000;

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
