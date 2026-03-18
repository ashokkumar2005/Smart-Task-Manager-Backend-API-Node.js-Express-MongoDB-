 const fs = require("fs");

 const log = (message)=>{
    fs.appendFile(
        "server-log.txt",
        message,"\n",
        err=>{
          if(err)  console.log(err)
        }
    )
 }

 module.exports=log;