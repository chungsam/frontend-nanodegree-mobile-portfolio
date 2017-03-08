var express = require('express');
var app = express();

var PORT = 3000;

app.use(express.static('dist'));

app.listen(3000, function() {
    console.log("Server listening on " + PORT);
});