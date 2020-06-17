var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path=require("path");

var app=express();

const port=3000;

var route= require("./routes/route");

mongoose.connect("mongodb://localhost:27017/details");

mongoose.connection.on("connected",()=>{
    console.log("Mongodb connected");
});
mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("Mongodb connection failed!!:"+err);
        
    }
});

app.use(bodyparser.json()); // HAS TO BE BEFORE ROUTE DECLARATION!!!!!!

app.use("/api",route);
app.use(cors());


app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
    res.send("foobar");
});

app.listen(port,function(){
    console.log("Server started at port:"+port); 
});

