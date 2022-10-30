const express = require("express");

const app = express();
const port = 5000;

app.use((req, res, next) => {
  console.log("calling middleware");
  res.send("Hello Middleware")
  next();
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
