var express = require('express');
var app = express();
var path = require('path');

console.log(__dirname);
app.use('/jsFiles', express.static(__dirname + "/static"));
// viewed at http://localhost:8080
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);