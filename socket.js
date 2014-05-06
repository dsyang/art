var app = require('http').createServer(handler)
  , io = require('socket.io').listen(15312)
  , fs = require('fs')
  , stdin = process.openStdin();

 app.listen(15314);

 function handler (req, res) {
   fs.readFile(__dirname + '/index.html',
   function (err, data) {
     if (err) {
       res.writeHead(500);
       return res.end('Error loading index.html');
     }
     res.writeHead(200);
     res.end(data);
   });
 }

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
