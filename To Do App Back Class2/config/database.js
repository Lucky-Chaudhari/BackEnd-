 const mongoose = require("mongoose");

 require('dotenv').config();
// We have the function  to connect the database to backend

 const dbConnect = ()=> {
   mongoose.connect(process.env.DATABASE_URL,   {
    useNewUrlParser:true,
    useUnifiedTopology :true
   })
// return karta hai promise

.then(() =>console.log("DB ka Connection Successful"))
.catch(()=>{
  console.log("DB ka Connection Issue");
  console.error(error.message);
  process.exit(1);
});
 }

 module.exports= dbConnect;
