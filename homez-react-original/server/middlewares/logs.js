const fs = require("fs");

const addLogs = (fileName) => {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n${Date.now()}: ${req.ip} - ${req.method} - ${req.path} `,
      (err, data) => {
        next();
      }
    );
  };
};

module.exports = { addLogs };
