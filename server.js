// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var language = req.headers['accept-language'].split(',')[0];
  var software = req.headers['user-agent'].split('(')[1].split(')')[0];
  res.send(JSON.stringify({ip, language, software}));
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
