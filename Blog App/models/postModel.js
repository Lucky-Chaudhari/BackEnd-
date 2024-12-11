//import mongoose
const mongoose = require("mongoose");


//route handler

const postSchema = new mongoose.Schema({
  title:{
   type:String,
   required:true,

  },
  body:{
    type:String,
    required:true,
  },
  likes:[{
    type:mongoose.Schema.Type.ObjectId,
    ref:"Like",
    }],
    comments:[{
      type:mongoose.Schema.Type.ObjectId,
    ref:"Comment",
    }]
})


//export
module.exports= mongoose.model("Post",postSchema)