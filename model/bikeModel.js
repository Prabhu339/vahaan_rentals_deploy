const mongoose=require("mongoose")
const bikemodelSchema=new mongoose.Schema({
    electricImg:String,
    cruiserImg:String,
    sportsImg:String,
    scooterImg:String,
    electricModel:String,
    cruiserModel:String,
    sportsModel:String,
    scooterModel:String,
    electricPrice:String,
    cruiserPrice:String,
    sportsPrice:String,
    scooterPrice:String,
    electricDescription:String,
    cruiserDescription:String,
    sportsDescription:String,
    scooterDescription:String,
    electricBrand:String,
    cruiserBrand:String,
    sportsBrand:String,
    scooterBrand:String,
    

})
module.exports=mongoose.model("bikemodelSchema",bikemodelSchema);