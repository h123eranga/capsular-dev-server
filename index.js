var express = require('express');
var app = express();
var path = require('path');

class CapsularDevServer {
    startServer(servePort, relativePath, absolutePath) {
        app.use(relativePath, express.static(__dirname + absolutePath));
        app.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname + '/index.html'));
        });

        app.listen(servePort);
    }
}

module.exports.CapsularDevServer = CapsularDevServer;