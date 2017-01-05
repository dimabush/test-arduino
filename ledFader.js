var five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});

board.on("ready", function () {
    var leds = new five.Leds([3, 6, 10]);
    var index = 0;

    /*var fader = function fader() {
        console.log("starting ...");
        if (index < leds.length) {
            leds[index].fadeIn(1500, function () {
                leds[index++].fadeOut(1500, fader);
            });
        }
    };*/

    var fader = function fader() {
        if (index > 0) {
            leds[index-1].fadeOut(1500);
        }
        if (index < leds.length) {
            leds[index++].fadeIn(1500, fader);
        }
    };

    fader();
    console.log("ending");
});