const express=require("express")
const router=express.Router();
const bikemodel=require("../model/bikeModel")

router.post("/",async (req,res)=>{
    const bike=new bikemodel(req.body)
    const result=await bike.save()
    res.send(result)
})

router.get("/", async (req,res)=>{
    const result=await bikemodel.find()
    res.send(result)
})

router.get("/:_id", async (req,res)=>{
    const query={_id:req.params._id}
    const result=await bikemodel.findOne(query)
    res.send(result)
})
router.delete("/:_id", async (req,res)=>{
    const query={_id:req.params._id}
    const result=await bikemodel.deleteOne(query)
    res.send(result)
})
router.put("/:_id", async (req,res)=>{
    const query={_id:req.params._id}
    const result=await bikemodel.updateOne(query)
    res.send(result)
})


module.exports=router;