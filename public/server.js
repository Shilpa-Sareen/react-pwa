var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname)); //Serves resources from public folder


var server = app.listen(5000);

console.log("Server started at: localhost:5000");
