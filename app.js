var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


var connection = require('./connections');
var routes = require('./routes');

var server = app.listen(8000,function(){
  console.log('Server listening on port'+ server.address().port);
});

connection.init();
routes.configure(app);
