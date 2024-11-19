





const express=require("express");
const app = express();

//load config from env file

require("dotenv").config();
const PORT = process.env.PORT||4000;


//middleware to parse json request body
app.use(express.json());


// Import route for todo API

const todoRoutes = require("./routes/todos")

//mount the todo API routes
app.use("/api/v1",todoRoutes);



//start the server
app.listen(PORT ,() =>{
  console.log(`Server started successfully at ${PORT}`);
})


//connection DB
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
  res.send(`<h1> This is Homepage Baby </h1>`);
})
