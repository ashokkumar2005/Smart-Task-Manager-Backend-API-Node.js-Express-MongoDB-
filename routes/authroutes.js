 const express = require("express")
 const router =express.Router();

 const authenticate=require("../controllers/authcontroller.js")

 router.post("/register",authenticate.register);

 router.post("login",authenticate.login);

 module.exports=router;