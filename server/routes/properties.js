const express = require("express");
const router = express.Router();
const {handlefetchProperties, handleSaveProperties} = require("../controllers/properties")

router.get("/properties/fetch", (req, res) => {

    handlefetchProperties(req,res);
  });

  router.post("/properties/add", (req, res) => {

    handleSaveProperties(req,res);
  });




module.exports = router;