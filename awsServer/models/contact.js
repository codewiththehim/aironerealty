const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
}, {timestamps:true});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact