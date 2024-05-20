const Contact = require("../models/contact");
const mail = require("../models/contactMailer");


async function handleUserContact(req, res) {
  const { name, email, phone, details } = req?.body || {};

  if (!(name && email && phone, details)) {
    res.status(400).send("Please fill all the details");
    return;
  }

  
  const reqData = {
    name,
    email,
    phone,
    details
  };
  mail();
  await Contact.create(reqData);
  mail(name,email,phone,details);
  res.status(200).send({response:"Successfull"});
}





module.exports = {
    handleUserContact
};
