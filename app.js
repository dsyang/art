var stdin = process.openStdin();
var express = require("express");
var app = express();

app.get("/static/:staticFilename", function (request, response) {
  response.sendfile("static/" + request.params.staticFilename);
});
app.listen(8000);

var io = require('socket.io').listen(15312, { log: false });
io.set( 'origins', '*localhost*:*' );

io.sockets.on('connection', function (socket) {
		console.log("connected. Preparing for DIFFERENTS!");
		stdin.on('data', function(buf) {
				var s = buf.toString();
				if (s.trim() === "DIFFERENT!") {
						socket.emit('news', "it's different");
				}
		});

		socket.on('my other event', function (data) {
				console.log(data);
		});
});
