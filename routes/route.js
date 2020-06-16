const express=require("express");
const router=express.Router();

const detail=require("../models/details");

router.get("/details",(req,res,next)=>{
    detail.find(function(err,details){
        res.json(details);
    })

});

router.post("detail",(req,res,next)=>{
    //logic for adding details
});

router.delete("/detail",(req,res,next)=>{
    //logic for deleting details
});

module.exports=router;