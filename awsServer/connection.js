const mongoose = require("mongoose");
const constants = require("./constants");

async function connectMongoDb(collection)
{
    return mongoose.connect(`${constants.databaseURL}/${collection}`)
}

module.exports = {connectMongoDb}; 

 