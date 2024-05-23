const jwt = require("jsonwebtoken");

const key = "India";
const singInToken = (email) => {
  const token = jwt.sign({ email }, key, {
    expiresIn: "5h",
  });

  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, key, async (err, data) => {
    if (err) {
      return -1;
    } else {
      return data;
    }
  });
};

module.exports = { singInToken, verifyToken };
