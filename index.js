var http = require('http');
var ecstatic = require('ecstatic')({
  root: __dirname + '/public',
  showDir: true,
  gzip: true
});

http.createServer(function (req, res) {
  ecstatic(req, res);
}).listen(3000);
