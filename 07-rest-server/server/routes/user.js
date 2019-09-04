const express = require("express");
const User = require("../models/user");
const bcrypt = require('bcrypt');


const app = express();

app.get("/user", (req, res) => {
  res.json("get User");
});

app.post("/user", (req, res) => {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        message: err
      });
    }

    res.json({
      ok: true,
      user: userDB
    });
  });
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;

  res.json({ id });
});

app.delete("/user/:id", (req, res) => {
  res.json("delete User");
});

module.exports = app;
