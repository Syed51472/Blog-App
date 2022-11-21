var express = require("express");
var adminModel = require("../models/admin");
var router = express.Router();
const bcrypt = require("bcrypt");

function checkEmail(req, res, next) {
  var email = req.body.Email;
  var checkexitemail = adminModel.findOne({ email: email });
  checkexitemail.exec((err, data) => {
    if (err) throw err;
    if (data) {
      return res.status(200).json({
        msg: "Email Already Exits",
        results: data,
      });
    }
    next();
  });
}

router.get("/", function (req, res, next) {
  // res.render("index", { title: "Users Data" });

  var adminDetails = new adminModel({
    name: "Admin",
    email: "ADmin@gmail.com",
    password: "admin@123",
    role: "User",
  });

  adminDetails.save(function (err, req1) {
    if (err) throw err;

    res.render("index", { title: "Admin Data Inserted" });
  });
});

router.post("/userregister", checkEmail, function (req, res, next) {
  bcrypt.hash(req.body.Password, 10, function (err, hash) {
    if (err) {
      res.status(400).json({
        msg: "Something Wrong, Try Later!",
        results: err,
      });
    } else {
      var userDetails = new adminModel({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
        role: "User",
      });

      userDetails
        .save()
        .then((resResult) => {
          res.status(201).json({
            msg: "User created Successfully",
            results: resResult,
          });
        })
        .catch((err) => {
          res.json(err);
        });
    }
  });
});

module.exports = router;
