var http = require('http');
var ecstatic = require('ecstatic')({
  root: __dirname + '/public',
  showDir: true,
  gzip: true
});

http.createServer(ecstatic).listen(3000);
