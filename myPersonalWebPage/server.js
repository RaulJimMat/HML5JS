var express = require('express');

var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('GET Hello World!');
});

app.post('/', function (req, res) {
  res.send('POST Hello World!');
});

app.post('/mail/process', (req,res) =>{
	res.send(JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});