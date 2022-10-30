const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
