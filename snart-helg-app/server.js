// server.js
const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
// Start the app by listening on the default
// Gcloud port
if (module === require.main) {
    // Start the server
    var server = app.listen(process.env.port || 8080, function () {
        var port = server.address().port;

        console.log('App listening on port %s', port);
        console.log('Press Ctrl+C to quit.');
    });
}
  
module.exports = app;