var five = require("johnny-five");
var piezo = require('./piezo');
var board = new five.Board({
    port: "COM3"
});

board.on("ready", function() {

    // Create a new `button` hardware instance.
    var button = new five.Button(2);
    var led7 = new five.Led(7);

    board.repl.inject({
        piezo: piezo
    });


    button.on("hold", function() {
        console.log( "Button held" );
    });

    button.on("press", function() {
        led7.off();

        piezo.piezoPlay();
        led7.on();

        console.log( "Button pressed" );
    });

    button.on("release", function() {
        console.log( "Button released" );
    });
});

var  moduleManager = {

};

module.exports = moduleManager;