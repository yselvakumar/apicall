//Initiallising node modules
var express = require("express");
var sql = require("mssql");
const bodyParser = require('body-parser'); 
var app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());

app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var server = app.listen(8081, function () {
    var port = server.address().port;  
    console.log("App now running on port", port);
 });

 app.get('/',function(req,res){
     res.send("Welcome to this world")
 })