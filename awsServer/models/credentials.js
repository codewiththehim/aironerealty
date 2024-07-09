const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      required:false,
    }
  },
  { timestamps: true }
);

const Credentials = mongoose.model("loginDetails", userSchema);

module.exports = Credentials;
