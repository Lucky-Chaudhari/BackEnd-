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
  const {name,brand}= request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.")
 })