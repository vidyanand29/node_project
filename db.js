//import mongoose
const mongoose = require('mongoose');
require('dotenv').config();

//mongodbUrl

const mongodbUrl = process.env.DB_URL;

//set up mongodb connection

mongoose.connect(mongodbUrl)
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Database connection error: " + err);
  });

//object to perform mongodb operations

const db = mongoose.connection;

//event listeners for database connection



db.on('disconnected',()=>{
  console.log("database disconnected");
})

//export db object

module.exports = db;