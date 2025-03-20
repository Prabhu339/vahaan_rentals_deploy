const quiryModel=require("../model/quiryModel")

const express=require("express")

const router=express.Router()

router.post("/",async (req,res)=>{
    const quiry=new quiryModel(req.body)
    const result=await quiry.save()
    res.send(result);
})

router.get("/",async (req,res)=>{
    
    const result=await quiryModel.find()
    res.send(result);
})
module.exports=router;