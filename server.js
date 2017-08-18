var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Avinash-one', function(req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'Avinash-one.html'));    
});
app.get('/Avinash-two', function(req, res) {
     res.send('Avinsh Article two requested and will be served here');    
});
app.get('/Avinash-three', function(req, res) {
     res.send('Avinash Article three requested and will be served here');    
});
app.get('/Avinash-fore', function(req, res) {
     res.send('Avinash Article fore requested and will be served here');    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
