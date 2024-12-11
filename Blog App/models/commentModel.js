// import mongoose

const mongoose = require("mongoose");




// route handler
const commentSchema= new mongoose({
  post:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"Post",//reference to the post model
  },
  user:{
    type:String,
    required:true,
  },
  body:{
    type:String,
    required:true,
  }
});

//export
module.exports=mongoose.model("Comment",commentSchema);