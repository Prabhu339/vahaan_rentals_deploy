const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    image:String,
    model:String,
    type:String,
    price:String,
})

module.exports=mongoose.model("blogSchema",blogSchema)