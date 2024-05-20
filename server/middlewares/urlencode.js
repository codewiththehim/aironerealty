const bodyParser = require("body-parser");

const encodeURL = () => bodyParser.urlencoded({ extended: false });

module.exports = encodeURL;