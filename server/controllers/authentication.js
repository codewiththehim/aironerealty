const bcrypt = require("bcryptjs");
const Credentials = require("../models/credentials");
const checkJwt = require("../services");
const mail = require("../models/forgotPasswordMailer");
const jwt = require("jsonwebtoken");
const key = "India";

async function handleUserSignUp(req, res) {
  const { name, email, password } = req?.body || {};

  if (!(name && email && password)) {
    res.status(400).send("Please fill all the details");
    return;
  }

  const existingAccount = await Credentials.findOne({ email });
  if (existingAccount !== null) {
    res.status(400).send("User exist on this email id");
    return;
  }
  const encryptedUserPassword = await bcrypt.hash(password, 10);
  const reqData = {
    userName: name,
    email,
    password: encryptedUserPassword,
  };
  await Credentials.create(reqData);
  token = checkJwt.singInToken(email);
  reqData.token = token;
  res.status(201).send(reqData);
}

async function handleUserLogin(req, res) {
  const { email, password } = req?.body || {};
  console.log("PPPPPPP", email, password);
  if (!(email && password)) {
    res.status(404).send("Please fill email and password to login");
    return;
  }
  const userData = await Credentials.findOne({ email });
  if (!userData) {
    res.status(400).send("please check your credentials again");
    return;
  }

  const resData = {
    userName: userData?.userName,
    email: userData?.email,
  };
  console.log("0000000000000000", userData);
  try {
    if (await bcrypt.compare(password, userData?.password)) {
      console.log("222222222222", userData);
      token = checkJwt.singInToken(email);
      resData.token = token;
      res.status(201).send(resData);
    } else {
      res.status(400).send("please check your credentials again");
    }
  } catch (err) {
    console.log("error$$$", err);
  }
}

async function handleUserInfo(req, res) {
  const token = req.headers?.["x-auth-token"];
  if (!token) {
    return res.json({ status: false });
  }

  return jwt.verify(token, key, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const userData = await Credentials.findOne({ email: data?.email });
      console.log(userData);
      if (userData)
        return res
          .status(201)
          .send({
            status: true,
            email: userData?.email,
            name: userData?.userName,
          });
      else return res.json({ status: false });
    }
  });
}

async function handleForgotPassword(req, res) {
  const { email } = req?.body || {};

  if (!email) {
    res.status(404).send("Please fill email to get password");
    return;
  }
  const userData = await Credentials.findOne({ email });
  if (!userData) {
    res.status(404).send("User doesn't exist");
    return;
  }
  try {
    mail(email, "userData.password");
  } catch (err) {
    console.log("error$$$", err);
  }
}
module.exports = {
  handleUserSignUp,
  handleUserLogin,
  handleUserInfo,
  handleForgotPassword,
};
