// import the model

const Todo = require("../models/Todo")

// define Route Handler

exports.createTodo = async(req,res) =>{
   try{
    // extract title and description from reaquest body
    const {title,decription}=req.body;

    //create a new Todo Object and insert into DB

    const response = await Todo.create({title,decription});

    // send the json response with a success flag
    res.status(200).json({
      sucess:true,
      data:response,
      message:'Entry Create Successfully'
    }
  );
   }
   catch(err){
  console.error(err);
  console.log(err);
  res.status(500)
  .json({
    success:false,
    data:"internal server error",
    message:err.message,
  })
   }
}
