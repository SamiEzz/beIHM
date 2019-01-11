var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!<h1>1312</h1>');
}).listen(8080);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "bei_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM table1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});