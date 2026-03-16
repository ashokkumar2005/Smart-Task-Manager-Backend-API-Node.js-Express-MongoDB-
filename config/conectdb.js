
const mongoose=require("mongoose");

 const connectdb= async()=>{

    try{
       await mongoose.connect(process.env.MONGO_URI);
       console.log("mangodb conected");
    }catch(error)
    {
        console.log(error);
        process.exit(1);
    }
 };

 module.exports = connectdb;