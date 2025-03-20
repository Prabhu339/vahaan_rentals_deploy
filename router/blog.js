const express=require("express");
const router=express.Router();
const blogModel=require("../model/blogModel");

router.post("/" ,async (req,res)=>{
 const blog=new blogModel(req.body)
 const result=await blog.save()
 res.send(result)
})
router.get("/" ,async (req,res)=>{
    
    const result=await blogModel.find()
    res.send(result)
   })
module.exports=router;