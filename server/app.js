var express = require('express');

var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var path = require('path')

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

app.use(logger('combined'));
app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
  res.render('app');
});

app.listen(8000);