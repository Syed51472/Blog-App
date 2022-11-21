var express = require("express");
var contactModel = require("../models/contact");
var router = express.Router();

router.get("/", function (req, res, next) {
  // res.render("index", { title: "Users Data" });

  var contactDetails = new contactModel({
    name: "Baqir Kazmi",
    email: "Baqir@gmail.com",
    subject: "Computer Science",
    message: "I am a Computer Science Student",
  });

  contactDetails.save(function (err, req1) {
    if (err) throw err;

    res.render("index", { title: "Contact Data Inserted" });
  });
});

router.post("/contact-us", function (req, res, next) {
  var contactDetails = new contactModel({
    name: req.body.Name,
    email: req.body.Email,
    subject: req.body.Subject,
    message: req.body.Message,
  });

  contactDetails
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Inserted Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
