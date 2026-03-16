 const Task = require("../models/task.js");

 exports.taskCreate = async(req,res,next) =>{

    try{
        const task = await Task.create({
            titile:req.body.titile,
            user:req.user.id
        })

        res.json(task);
    }catch(err){
        next(err);
    }
 }

 exports.getTasks= async(req,res,next) =>{

    try{
        const tasks = Task.findOne({user:req.body.id});

        res.json(tasks)

    }catch(err){
        next(err)
    };
 };