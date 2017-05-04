var path = require('path');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

var staticPath = path.join(__dirname);
app.use(express.static(staticPath));

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});