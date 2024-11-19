const mongoose = require("mongoose");


// to create Schema

const todoSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
      maxLength:50,
    },
    description:{
      type:String,
      required:true,
      maxLength:50,
    },
    cratedAt:{
      type:Date,
       equired:true,
       default:Date.now()
    },
    updateAt:{
      type:Date,
       equired:true,
       default:Date.now()
    }
  }
);
module.exports = mongoose.model("Todo",todoSchema);
