var http = require("http");
var fs   = require("fs");

var server = http.createServer(function(req,res){

	console.log("URL :" + req.url);
	res.write(fs.readFileSync("login.css", "utf8"));
	res.end();

});

server.listen(100);

console.log("Server is running.")