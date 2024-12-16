// import the model

const Todo = require("../models/Todo");


//define route handler
exports.createTodo = async (req,res) => {
  try {
    // extract the title and description from request body
    const{title,description}=req.body;

    //create a new Todo Obj and insert in DB or save into datebase
    const response = await Todo.create({title,description});

    //send a json response with a success flag
    res.status(200).json(
      {
        success:true,
        data:response,
        message:'Entry Create Successfully'
      }
    );

  }
  catch (err) {
    console.error(err.message);
console.log(err);
res.status(500).json({
  success:true,
  data:"internal server error",
  message:err.message,
})
  }
}