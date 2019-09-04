const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./config/config");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/user"));

mongoose.connect("mongodb://localhost:27017/coffee", (err, res) => {
  if (err) throw err;
  console.log("database online");
});

app.listen(process.env.PORT, () => {
  console.log("Listen port: ", process.env.PORT);
});
