 const mongoose = require("mongoose");

 const taskSchema = new mongoose.Schema({
    titile:{
        type:String,
        require:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
 }, {timestamps:true});
 

 module.exports = mongoose.model("Task",taskSchema);