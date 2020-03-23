var express = require('express');
var app = express();
var path = require('path');

class CapsularDevServer {
    startServer(servePort, relativePath, absolutePath) {
        app.use("/" + relativePath, express.static(absolutePath, { root: "./" }));
        app.get('/*', function (req, res) {
            res.sendFile(path.join('index.html'), { root: "./" });
        });

        app.listen(servePort);
    }
}

module.exports.CapsularDevServer = CapsularDevServer;