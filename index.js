var express = require('express');
var app = express();

// Let "routes.js" to map the "path" to the "controller".
require('./routes')(app);

// The "consolidate" is a library that handle multiple
// templating engine. Salah satunya, "Dust".
var cons = require('consolidate');

// Use "Dust Engine" to render .dust files.
app.engine('dust', cons.dust);
 
// Jadi kalo render dust file ngga perlu specify ".dust".
app.set('view engine', 'dust');

// Kasih tau render engine, semua template kita ada di
// dalem directory "./views".
app.set('views', __dirname + '/views');

// Expose the /public directory content (js, css, fonts).
app.use(express.static('public'));

// Start the server on "localhost" port 3000.
var server = app.listen(3000, 'localhost', function () {
  var port = server.address().port;
  console.log('Server listening at http://localhost:%s', port);
});
