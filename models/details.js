const mongoose=require("mongoose");

const DetailSchema=mongoose.Schema({
    emp_id:{
        type:String,
        unique:true,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    mark1:{
        type:Number,
        required:true
    },
    mark2:{
        type:Number,
        required:true
    },
    mark3:{
        type:Number,
        required:true
    },
    mark4:{
        type:Number,
        required:true
    },
    mark5:{
        type:Number,
        required:true
    }
})

const detail=  module.exports = mongoose.model("detail",DetailSchema);
