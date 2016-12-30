var temporal = require("temporal");
var five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});

board.on("ready", function () {

    // Initialize the RGB LED
    var led = new five.Led.RGB([6, 5, 3]);

    // Set to full intensity red
    console.log("100% red");
    led.color("#FF0000");
    // led.intensity(10);

    setTimeout(led.intensity(10), 500);

    /*for (var i = 0; i < 100; i++) {
        setTimeout(function () {
            led.intensity(100 - i);
        }, 100);
    }*/

   /* temporal.queue(
        /!*[{
         wait: 100,
         task: function () {
         for (var i = 0; i < 100; i++) {
         led.intensity(100 - i);
         }
         console.log("red blinking ...");
         }
         }]*!/
        [{
            wait: 100,
            task: function () {
                console.log("90% red");
                led.intensity(90);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("80% red");
                led.intensity(80);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("70% red");
                led.intensity(70);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("60% red");
                led.intensity(60);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("50% red");
                led.intensity(50);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("40% red");
                led.intensity(40);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("30% red");
                led.intensity(30);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("20% red");
                led.intensity(20);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("10% red");
                led.intensity(10);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("10% blue");
                led.color("#0000FF");
            }
        }, {
            wait: 100,
            task: function () {
                console.log("20% blue");
                led.intensity(20);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("30% blue");
                led.intensity(30);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("40% blue");
                led.intensity(40);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("50% blue");
                led.intensity(50);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("60% blue");
                led.intensity(60);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("70% blue");
                led.intensity(70);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("80% blue");
                led.intensity(80);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("90% blue");
                led.intensity(90);
            }
        }, {
            wait: 100,
            task: function () {
                console.log("100% blue");
                led.intensity(100);
            }
        }]);*/
});


/*var five = require("johnny-five");


 five.Board({
 port: "COM3"
 }).on("ready", function () {

 // Initialize the RGB LED
 var led = new five.Led.RGB({
 pins: {
 red: 6,
 green: 5,
 blue: 3
 }
 });

 // RGB LED alternate constructor
 // This will normalize an array of pins in [r, g, b]
 // order to an object (like above) that's shaped like:
 // {
 //   red: r,
 //   green: g,
 //   blue: b
 // }
 //var led = new five.Led.RGB([3,5,6]);

 // Add led to REPL (optional)
 this.repl.inject({
 led: led
 });

 // Turn it on and set the initial color
 led.on();
 led.color("#ff0066");

 led.blink(100);
 // led.color("#0033cc");


 });*/


/*
 var five = require("johnny-five"),
 board = new five.Board({
 port: "COM3"
 });


 board.on("ready", function() {

 // Initialize the RGB LED
 var led = new five.Led.RGB({
 pins: {
 red: 6,
 green: 5,
 blue: 3
 }
 });

 // RGB LED alternate constructor
 // This will normalize an array of pins in [r, g, b]
 // order to an object (like above) that's shaped like:
 // {
 //   red: r,
 //   green: g,
 //   blue: b
 // }
 //var led = new five.Led.RGB([3,5,6]);

 // Add led to REPL (optional)
 this.repl.inject({
 led: led
 });

 // Turn it on and set the initial color
 led.on();
 led.color("#FF0000");

 led.blink(1000);

 });*/
