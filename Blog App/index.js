const express = require("express")
const app =express();


require("dotenv").config();
const PORT = process.env.PORT||3000;

//middleware
app.use(express.json());


const blog = require("./routes/blog")


//mount
app.use("/api/v1",blog);


// fecthDatabase
const connectWithDb=require("./config/database");
connectWithDb();

//Start the server
app.listen(PORT,()=>{
  console.log(`App is running at Port no ${PORT}`);
})

// defult Route
app.use("/",(req,res)=>{
res.send(`<h1>This is my home page</h1>`)
})