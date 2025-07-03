//import mongoose
const mongoose = require('mongoose');

//person's schema
const menuItemSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  taste:{
    type:String,
    required:true,
    enum:["sweet","spicy","sour"],
  },
  is_drink:{
    type:Boolean,
    default:false,
  },
  ingredients:{
    type:[String],
    default:[]
  },
  num_sales:{
    type:Number,
    default:0
  }
})

//create person's model & export
const MenuItem = mongoose.model('MenuItem',menuItemSchema);

module.exports = MenuItem;