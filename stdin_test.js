

var stdin = process.openStdin();

stdin.on('data', function(chunk) {
		var k = chunk.toString();
		if (k.trim() === "DIFFERENT!") {
				console.log("Got a diff chunk: " + chunk);
		} else {
				console.log("fucked up!" + chunk);
		}
});
