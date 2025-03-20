require("./db")
const cors=require("cors")
const express=require("express")
const app=express();
app.use(cors());
app.use(express.json())


const blogModel=require('./model/blogModel')
const bikeModel=require("./model/bikeModel")
const quiryModel=require("./model/quiryModel")


const blogs=require("./router/blog")
const bike=require("./router/bikeRouter")
const quiry=require("./router/quiryRouter")



app.use("/blogs",blogs)
app.use("/bike",bike)
app.use("/quiry",quiry)


app.listen(4000,()=>{
    console.log('server is running on port 4000')
})