const express = require("express");
const router = express.Router();
const {getUsers, addUsers} = require("../controllers/users")


router.get("/", async (req, res) => {
  console.log("######");
  getUsers(req,res);
  
});

router.get("/:id", async (req, res) => {
  console.log("######")
  getUsers(req, res)
});

router.post("/", async (req, res) => {
  console.log("######")
  addUsers(req,res)
});

module.exports = router;
