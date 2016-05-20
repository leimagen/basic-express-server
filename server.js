var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": 1,
        "text": "Ham"
    },
    {
        "id": 2,
        "text": "Cheese"
    },
    {
        "id": 3,
        "text": "Chicken"
    },
    {
        "id": 4,
        "text": "Eggs"
    },
    {
        "id": 5,
        "text": "Bacon"
    },
];

app.get('/ingredients', function(req,res) {
    res.send(ingredients);
});

app.listen(6069);
