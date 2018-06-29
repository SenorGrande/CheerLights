var request = require("request"); 
var five = require("johnny-five"); 
var colorMap = require("./cheerlights-colors"); 
var board = new five.Board(); 

board.on("ready", function() {
	console.log("Connected");
	var lastColor = "white";
	var led = new five.Led.RGB([9, 10, 11]);
	this.repl.inject({
		led: led
	});
	led.color(colorMap[lastColor]);
	
	setInterval(function() {
		getLatestColor(function(err, color) {
			if (!err && colorMap[color]) {
				if (color != lastColor) {
					lastColor = color;
					console.log("Changing to " + color);
					led.color(colorMap[color]);
				}
			}
		});
	}, 3000);
});

function getLatestColor(callback) {
	request({
		url: "https://api.thingspeak.com/channels/1417/feed/last.json",
		json: true
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var color = body.field1;
			callback(null, color);
		} else {
			callback(error, null);
		}
	});
}

