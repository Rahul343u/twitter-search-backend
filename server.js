const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/twitter-search')));
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/twitter-search/index.html'));
});

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log('Server is running at port:' + port));
