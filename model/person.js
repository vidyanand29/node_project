//import mongoose
const mongoose = require('mongoose');

//person's schema
const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  work:{
    type:String,
    required:true,
    enum:["cook","waiter","clerk"],
  },
})

//create person's model & export
const person = mongoose.model('person',personSchema);

module.exports = person;