var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//Example Route
var router = express.Router();
router.get('/',function(req,res,next){
    res.send("Hello World!");
});

app.use(router);

app.listen(3000,function(){
    console.log("Node server running on http://localhost:3000");
});