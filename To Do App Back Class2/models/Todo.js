
// Schema is the discription of your data

const mongoose = require("mongoose");

// Create the Schema for stored the data
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

    //  This is Timestamp
    createdAt:{
      type:Date,
      required:true,
      default:Date.now(),
    },
    updateAt:{
      type:Date,
      required:true,
      default:Date.now(),
    }

}
);
//Export the Schema
module.exports=mongoose.model("Todo",todoSchema);