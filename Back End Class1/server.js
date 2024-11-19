





//Server Instantiate
 const express = require ('express');
 const app = express();

 //used ro parse req.body in express -> POST or PUT
 const bodyParser = require('body-parser');

 //specifically parese Json data & ad it to the request.Body Objects
 app.use(bodyParser.json())

 // Activate the Server On 3000 Port
 app.listen(3000,()=>{
  console.log("Server Started at port no 3000")
 });

 //Routes

 app.get('/',(request,response) =>{
  response.send("hello Jee,Kaise Ho Saare");
 })

 app.post('/api/cars',(request,response) =>{
  const {name,brand} = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.")
 })



 // This is The way  to connect Express  With Mongodb with the help of mongoose
 //Thats Why We are  Install  Mongoose

 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser:true,
  useUnifiedTopology:true
 })
 .then(()=>{console.log("Connection Successful")})
 .catch((error)=>{
  console.log("Recieved an Error ")
 })