var five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});

board.on("ready", function() {
    var led13 = new five.Led(13);
    led13.blink(500);
    var led7 = new five.Led(7);
    led7.blink(300);/*
    var led3 = new five.Led(3);
    // led3.blink(500);
    setTimeout(function(){ led3.blink(300); }, 300);*/

});

moduleManager = {

};

module.exports= moduleManager;