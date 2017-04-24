var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/src'));

app.get('/test', function(req, res){
  console.log("In method test");
  res.end("Hurray!! University library web service is working")
});

var server = app.listen(8080)