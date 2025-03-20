const mongoose=require("mongoose")
 
const quirySchema=new mongoose.Schema({
    number:String,
    
})

module.exports=mongoose.model("quirySchema",quirySchema);