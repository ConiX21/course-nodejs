var http = require("http");
var ws = require("nodejs-websocket");
var fs = require("fs");

//https://github.com/sitegui/nodejs-websocket

http.createServer(function (req, res) {

    fs.createReadStream("index.html").pipe(res);
}).listen(8080);

var server = ws.createServer(function (connection) {
	connection.nickname = null;
	connection.on("text", function (str) {
		if (connection.nickname === null) {
			connection.nickname = str
			broadcast(str+" entered")
		} else
			broadcast("["+connection.nickname+"] "+str)
	})
	connection.on("close", function () {
		broadcast(connection.nickname+" left")
	})
}).listen(8081)

console.log(`Server web run on : http://localhost:8080`);
console.log(`Client need to connect on socket server : http://localhost:8081`);

function broadcast(str) {
	server.connections.forEach(function (connection) {
		connection.sendText(str)
	})
}