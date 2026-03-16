 const { uniq } = require("lodash");
const mongoose = require("mongoose");

 const userSchema =new mongoose.userSchema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        require:ture
    },
    avatar:{
        type:String
    }

 },{timestamps:true} );


 module.exports = mongoose.model("User",userSchema);
