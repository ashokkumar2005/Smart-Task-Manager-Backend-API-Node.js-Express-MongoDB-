 require(dotenv).config();

 const express=require("express");
 const cors = require("cors");
 const helmet = require("helmet");
 const morgan = require("morgan");
 const ratelimter = require("express-rate-limit");

 const fs = require("fs");
 const path = require("path");

 const connectdb = require("./config/conectdb.js")

 const authrouter = require("./routes/authroutes.js");
 const fileroutes = require("./routes/filerouter.js");
 const taskroutes = require("./routes/taskrouter.js");

const errorhandler = require("./middleware/errormiddleware.js");
const multer = require("multer");

const app=express();

app.use(express.json());
app.use(cors);
app.use(helmet);
app.use(multer("dev"));

const limiter = ratelimter({
    windowMs:15*60*1000,
    max:100
});

app.use(limiter);

//stream api
app.get((req,res)=>{

    const filepath = path.join(__dirname,"big-file.txt");

    const stream = fs.createReadStream(filepath);

    stream.pipe(res);
});

app.use("/api/auth",authrouter);
app.use("/api/files",fileroutes);
app.use("/api/tasks",taskroutes);

app.use(errorhandler);

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})




 