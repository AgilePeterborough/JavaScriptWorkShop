var express = require("express"),
 mockData = require('./mockData.js'),
 app = express(),
 server = require('http').createServer(app),
 path = require('path');

var fullPath = path.resolve(__dirname + '/../');

app.use("/",express.static(fullPath));

server.listen("3030");

app.get('/',function(req, res){
  var fullPath = path.resolve(__dirname + '/index.html');
    res.sendfile(fullPath);
});

//Calls for dummy data
app.get('/getNotifications',function(req, res){
  res.send(mockData.getNotifications())
});

app.get('/getTimeline',function(req, res){
  res.send(mockData.getTimeline())
});

app.get('/getVisitors',function(req, res){
  res.send(mockData.getVisitors())
});

app.get('/getAnimals',function(req, res){
  res.send(mockData.getAnimals())
});

app.get('/getMeerkats',function(req, res){
  setTimeout(function(){
    res.send(mockData.getMeerkats())
  }, 2000);
});


console.log("listening for connections on 3030");
