    const { postFun } = require("./Controller")

    const express=require("express")
    const router=express.Router()

    router.post("/p",postFun);

    module.exports=router