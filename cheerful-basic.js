var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	var led = new five.Led.RGB({
		pins: {
		red: 9,
		green: 10,
		blue: 11
		},
		isAnode: false
	});
	
	console.log(led.color());		  
	
	function myLoop (hexColour) {
		setTimeout(function () {
			led.color(hexColour);			
		}, 3000)
	}
	
	var red = 0;
	var green = 0;
	var blue = 0;
	
	var hexColour = "";

	//red = 255;
	//green = 255;
	//blue = 255;
	//hexColour = "#" + (red.toString(16)) + (green.toString(16)) + (blue.toString(16));
	//console.log(hexColour);
	//myLoop(hexColour);
	
	for (red=0; red<256; ++red)
	{
		hexColour = "#" + red.toString(16) + "" + green.toString(16) + "" + blue.toString(16);
		console.log(hexColour);
		myLoop(hexColour);
	}
	
/*
	for (green=0; green<256; ++green)
	{
		hexColour = "#" + ((red * 10000) + (green * 100) + (blue)).toString(16);
		myLoop(hexColor);
	}
	
	for (red=255; red>0; --red)
	{
		hexColour = "#" + ((red * 10000) + (green * 100) + (blue)).toString(16);
		myLoop(hexColor);
	}
	
	for (blue=0; blue<256; ++blue)
	{
		hexColour = "#" + ((red * 10000) + (green * 100) + (blue)).toString(16);
		myLoop(hexColor);
	}
	
	for (green=255; green>0; --green)
	{
		hexColour = "#" + ((red * 10000) + (green * 100) + (blue)).toString(16);
		myLoop(hexColor);
	}
	
	for (red=0; red<256; ++red)
	{
		//trun red green and blue into hex
		hexColour = "#" + ((red * 10000) + (green * 100) + (blue)).toString(16);
		myLoop(hexColor);
	}
	
	for (blue=255; blue>0; --blue)
	{
		hexColour = "#" + ((red * 10000) + (green * 100) + (blue)).toString(16);
		myLoop(hexColor);
	}
*/	
});

