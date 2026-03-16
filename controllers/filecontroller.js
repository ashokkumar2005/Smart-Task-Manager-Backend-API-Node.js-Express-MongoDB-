 exports.uploadfile=(req,res)=>{
    res.json({
        message:"file upload successfully",
        file:req.file.filename
    });
 };