// import the model

const Todo = require("../models/Todo");

//define route handler
exports.getTodo  = async (req,res) => {
  try {
  //fetch all the todo items from database using find function
      const todos = await Todo.find({});

      //response update
      res.status(200).json({
        success:true,
        data:todos,
        message:"Entire Todo Data is fetched"
      })
  }
  catch (err) {
 console.error(err)
 res.status(500).json({
  success:false,
  error:err.message,
  message:'Server Error',
 });
  }
}

exports.getTodoById = async(req,res)  =>{
  try {
    //Extract todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({_id:id})
    //data forgiven id not found
    if(!todo){
      return res.status(404).json({
        success:false,
        message:"no Data Found Wont Given Id",
      })
    }
    //data for given id found
    res.status(200).json({
      success:true,
      data:todo,
      message:`Todo ${id} data suceesfully fetched`,
    })
  }
  catch (error) {
    console.error(err)
 res.status(500).json({
  success:false,
  error:err.message,
  message:'Server Error',
 });
  }
}