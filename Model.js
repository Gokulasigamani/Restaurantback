const mongoose=require("mongoose")
const schema=mongoose.Schema

const userSchema=new schema({
    name:String,
    members: Number,
    email:String,
    date:String


})

module.exports=mongoose.model("userModel",userSchema)