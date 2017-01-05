var five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});

board.on("ready", function () {
    var leds = new five.Leds([3, 6, 10]);
    var duration = 2000;

    var fader = function fader() {
        if (!easingFunctions.length) {
            process.exit();
        }
        var easing = easingFunctions.shift();

        leds.fadeOut(500, function () {
            leds.fadeIn({easing: easing, duration: duration}, fader);
        });
    };

    fader();
});

var easingFunctions = [/*"linear",
    "inQuad",
    "outQuad",
    "inCube",
    "outCube",
    "inOutCube",
    "inQuart",
    "outQuart",
    "inOutQuart",
    "inQuint",
    "outQuint",
    "inOutQuint",
    "inExpo",
    "outExpo",
    "inOutExpo",
    "inCirc",
    "outCirc",
    "inOutCirc",
    "inBounce",*/
    "outBounce",
    "inOutBounce"];