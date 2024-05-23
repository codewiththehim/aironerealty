const express = require("express");
const router = express.Router();
const {handleUserSignUp, handleUserLogin, handleUserInfo, handleForgotPassword} = require("../controllers/authentication")
router.post("/login", (req, res) => {
  console.log("HomePage");
  handleUserLogin(req,res)
});

router.post("/signup", (req, res) => {
  console.log("ddddf")
  console.log(req.body)

  handleUserSignUp(req,res);
});

router.get("/userInfo", (req, res) => {
  console.log("user info");
  handleUserInfo(req,res)
});

router.post("/forgotPassword", (req, res) => {
  console.log("forgotPassword");
  handleForgotPassword(req,res)
});


module.exports = router;