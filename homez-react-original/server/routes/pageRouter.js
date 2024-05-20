const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("HomePagessssaaaa");
  res.send("Welcome to HomePage");
});

router.get("/about", (req, res) => {
  console.log("About");
  res.send("Welcome to About Page");
});


module.exports = router;