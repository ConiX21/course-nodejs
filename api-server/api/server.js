var express = require('express'),
    bodyParser = require('body-parser');
    var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var path = require('path');
var app = express();
var mongoose = require('mongoose');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var RouteProduct =  require('./product.route');
new RouteProduct(app, mongoose);

app.get('/', function (req, res, next) {
    res.sendFile(`${path.dirname(__dirname)}\\client\\index.html`);
})

app.post('/api/hello', function (req, res, next) {
    //console.log(path.dirname(__dirname))
    console.log(req.body)
    res.header("Content-Type" , "application/json");
    res.send(400,{"message" : "Hellllooooo"});
})

app.listen(3000, function () {
    console.log('Server run on : http://localhost:3000');
})
