const express = require("express");
const router = express.Router();
const {handleUserContact} = require("../controllers/contact")


router.post("/contact", (req, res) => {

  handleUserContact(req,res);
});




module.exports = router;