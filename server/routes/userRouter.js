const express = require("express");
const router = express.Router();
const {getUsers, addUsers} = require("../controllers/users")


router.get("/", async (req, res) => {
  getUsers(req,res);
  
});

router.get("/:id", async (req, res) => {
  getUsers(req, res)
});

router.post("/", async (req, res) => {
  addUsers(req,res)
});

module.exports = router;
