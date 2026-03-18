 const express= require("express");

 const router= express.Router();

 const upload = require("../middleware/multermiddleware.js");

 const filecontroler = require("../controllers/filecontroller.js");

 router.post("/upload",upload.single("file"),filecontroler.uploadfile);

 module.exports = router;
