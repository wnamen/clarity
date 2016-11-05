var express = require('express');
var app = express();

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//Listen on Port 8080
app.listen(process.env.PORT || 8080, function () {
  console.log('Express server is up and running on http://localhost:8080/');
});
