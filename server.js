const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  
  port = process.env.PORT || 3000;

  app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'yamini',
    password: 'yamini',
    database: 'mydb'
});
 
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/employeeRoutes'); 
routes(app); 


