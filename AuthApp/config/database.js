const mongoose = require('mongoose');

 require("dotenv").config();

 exports.DBconnect=()=>{
      mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      })
      .then(()=>{console.log("Connected Successfuly")})
      .catch((err)=>{
        console.log("DB CONNECTION ISSUES");
        console.error(err)
        process.exit(1);
      })
 }