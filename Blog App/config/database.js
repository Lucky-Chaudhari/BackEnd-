

const mongoose = require("mongoose");


// This code load the all code to process env ke ander

require("dotenv").config();

// This code estabilish the coneection to th db

const connectWithDb = () => {
  mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
     useUnifiedTopology:true,
  })
  .then(()=> console.log("connection successful"))
  .catch((err)=>{
    console.log('Connection issues');
    console.error(err.message);
    process.exit(1);//Exit With  Error or Process End with Failar
  });
}
module.exports=connectWithDb;
