 const fs = require("fs");

 const streamfile=(path,res)=>{

    const readstream =fs.createReadStream(path);

    readstream.pipe(res);
 }

 module.exports=streamfile;