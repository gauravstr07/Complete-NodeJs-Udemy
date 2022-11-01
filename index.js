const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found 🤔" });
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
