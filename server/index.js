const express = require("express");
const urlencoded = require("./middlewares/urlencode");
// const userRouter = require("./routes/userRouter");
const contactRouter = require("./routes/contactRouter");
// const pageRouter = require("./routes/pageRouter");
// const authentication = require("./routes/authentication");
const properties = require("./routes/properties");
const {addLogs} = require("./middlewares/logs")
var bodyParser = require('body-parser')
const constants = require("./constants");
var cors = require('cors')
const { connectMongoDb } = require("./connection");
const app = express();

// middlewares

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(addLogs("logs.txt"))
app.use(cors())


// connect database
connectMongoDb("firstCollection")
  .then(() => console.log("connection established with the db"))
  .catch((err) => console.log("connection error", err));



// routes
// app.use(authentication);
// app.use("/page", pageRouter);
// app.use("/user", userRouter);
app.use(contactRouter)
// app.use(properties)

// start and listen the server
app.listen(constants.port, () => {
  console.log(`Server is running on port: ${constants.port}`);
});
