// all th4 this code is not visible to user that why we call it backend
const express= require("express");
const bodyParser =require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended : true}));
// we have to give body parser to express as they work together 
// there are various mehtord of body-parser utlencoded is one of them
// we have to seprety  state that   extended : true   for nexted value

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
// instant of sending bit of code we can send whole file as response by    ssendFile()
// when working in backend we cant just give name of file only we have to give its full address like Users\sanka\nodeJS\02_express\calculator\index.html
// we can get this address by __dirname function as we use above


// now to use post data on our page we have to use post()
// to access element posted using methord post in htmlwe have install body-parser npm package by
// npm install body-parser

// you can acces element by req.body.name_of_element
// you have to specify that element is number else it will be consider as text/string
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    // num1 and mun2 inside Number function is name we specify in html file
    var result= num1+num2;

    res.send("the result of given number is : "+result);
});
app.listen(3000,function (){
    console.log("server is started on port 3000");
});



// ;;;;;;;;;;;;;  this is for bmi calculator route  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",(req,res)=>{
    var h= Number(req.body.height);
    var w= Number(req.body.weight);
    var bmi = w/(h*h);
    res.send("your bmi is : "+bmi);
})