// var temporal = require("temporal");
var five = require("johnny-five"),
    board = new five.Board({
        port: "COM3"
    });

board.on("ready", function () {
    var relay = new five.Relay(10);
    var led = new five.Led(2);


    // Control the relay in real time
    // from the REPL by typing commands, eg.
    //
    // relay.on();
    //
    // relay.off();
    //
    this.repl.inject({
        relay: relay
    });

    // setTimeout(console.log("timeout"), 5000);
    // relay.on();
    /*for (var i=0; i<10; i++){
     relay.on();
     setTimeout(console.log("waiting 2 sec ..."), 2000);
     relay.off();
     }*/

    /*board.loop(2000, function () {
     relay.on();
     console.log("board loop..")
     });*/

    led.on();

    console.log("wtf is wrong with u?");
    setTimeout(function () {
        console.log("Lets begin...");
        relay.off();

    }, 10);

    relay.on();



    /*setInterval(function () {
        relay.on();
        setTimeout(function () {
            relay.off();
        }, 1000);
    }, 40000);*/

    /*temporal.queue([{
     wait: 1000,
     task: relay.on()
     },{
     wait: 1000,
     task: relay.off()
     },{
     wait: 1000,
     task: relay.on()
     },{
     wait: 1000,
     task: relay.off()
     },{
     wait: 1000,
     task: relay.on()
     },{
     wait: 1000,
     task: relay.off()
     },{
     wait: 1000,
     task: relay.on()
     },{
     wait: 1000,
     task: relay.off()
     },{
     wait: 1000,
     task: relay.on()
     },{
     wait: 1000,
     task: relay.off()
     }
     ]);*/


});


