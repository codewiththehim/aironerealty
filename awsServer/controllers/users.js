const User = require("../models/users");
const mail = require("../models/mail");

async function getUsers(req, res) {
  let data;
  const id = req?.params?.id
  if (!id) {
    data = await User.find({});
  } else {
    data = await User.find({ id });
  }

  res.send(data);
}


async function addUsers(req,res, data){
    mail();
    const result = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.body.id,
      age: req.body.age,
    });
    console.log("Database operation performed", result);
    res.status(201).send("added");
}

module.exports = {
  getUsers,
  addUsers,
};
