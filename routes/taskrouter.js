 const express = require("express");

 const router = express.Router();

 const auth =require("../controllers/authcontroller.js")

 const taskcontroller =require("../controllers/taskcontroller.js");


 router.post("/",auth,taskcontroller.taskCreate);

 router.get("/",auth,taskcontroller.getTasks);

 module.exports=router;