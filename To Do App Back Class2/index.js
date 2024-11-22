const express = require("express");
const app = express();


//load config from env file
require("dotenv").config();
const PORT = process.env.PORT||4000


//middleware to parser json request body
app.use(express.json());


//import route for todo api
const todoRoutes= require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);


// start server
app.listen(PORT,()=>{
  console.log(`Server Start Successfull at ${PORT}`);
})

// connection to BD
const dbConnect=require("./config/database");
dbConnect();

// default Route
app.get("/",(res,req)=>{
  res.send(`<h1> This is My Home Page </h1>`)
})