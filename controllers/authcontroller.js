 const user = require("../models/users.js");
 const bcrypt = require("bcrypt");
 const  jwt = require("jsonwebtoken");

 exports.register = async(req,res,next)=>{

    try{
        const {name,email,password} = req.body;
        
        const hashed = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashed
        });
        res.json( {message:"user registered"})
    }catch(err){
        next(err);
    }
 };


 exports.login = async(req,res,next)=>{

    try{
        const{email,password} =req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(500).json("user not found!!")
        };

        const match = bcrypt.compare(password,user.password);

        if(!match){
            return res.status(500).json("password incorrect")
        };

        const token =jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.json({
            message:"login success",
            token
        })
    }catch(err){
        next(err);
    }
 }