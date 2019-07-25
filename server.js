var express = require('express');
var path = require('path')
var app = express();


//setting middleware
app.use(express.static(path.join(__dirname, 'UI\\build'))); //Serves resources from public folder
console.log("Server is up at: localhost5000  ");
var server = app.listen(5000);

