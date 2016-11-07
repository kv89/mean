var express = require("express");
var app = express();

app.get('/', function(req, res ){
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function(){
    console.log('Started on port : 3000');
});