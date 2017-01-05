var five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});

board.on("ready", function () {


    var leds = new five.Leds([2, 3, 4]);
    var buttons = new five.Buttons([7, 8, 9]);

    // var buttons = new five.Buttons(["b2", "b3"]);
    // var leds = new five.Leds(["b8", "b9"]);

    // console.log("there are two butt: ", buttons);
    // console.log("there are two leds: ", leds);


    // buttons.on("press", function (button) {
    //     console.log("button was pressed with index: ", buttons.indexOf(button));
    //     leds.on();
    // });

    /*buttons.on("press", function (button) {
        console.log("button was pressed with index: ", buttons.indexOf(button));
        var index = buttons.indexOf(button);
        leds.off();
        leds[index].on();
    });*/


    /*buttons[0].on("press", function () {
       console.log("butt[0] pressed once..");
       buttons[0].on("press", function () {
           console.log("butt[0] pressed second time!");
           leds.on();
        });
    });*/

//____________________________________________________________________

    /*buttons[0].on("hold", function () {
        console.log("button [0] hold...");
        buttons[1].on("hold", function () {
            console.log("button [1] hold...");
            // buttons[2].on("hold", function () {
            //     console.log("button [2] hold...");
            leds.on();

            // })
        });
    });

    buttons[2].on("down", function () {
       leds.off();
    });*/

//_____________________________________________________________________
    var difference;

    buttons[0].on("down", function () {
        console.log("butt down ..");
        // leds.on();
        var unix = new Date();
        // console.log("unix first: ", unix);
        difference = unix;
        console.time('time');

    });

    buttons[0].on("up", function () {
        console.log("butt up ..");
        // leds.off();
        var unix = new Date();
        // console.log("unix second: ", unix);
        // difference -= unix;
        result = Math.round((unix - difference)/1000);
        // console.log("difference is: ", difference);
        console.log("result is: ", result);
        console.timeEnd('time');

        if (result === 3){
            leds.on();
        }else{
            console.log("try again");
        }
    });

    buttons[2].on("down", function () {
        console.log("butt[2] was pressed");
        leds.off();
    });
//_____________________________________________________________________

   /* buttons[0].holdtime = 1000;
    console.log(" hold START time=", buttons[0].holdtime);

    /!*var firstEnter = buttons[0].on("hold", function () {
        console.log("1-hold ... beep");
    });*!/

    var secEnter = buttons[0].on("hold", function () {
        console.log("2-hold ... beep");
    });

    var thirdEnter = buttons[0].on("hold", function () {
        console.log("3-hold ... beep");
        // leds[0].on();
    });

    if (buttons[0].on("hold", function () {
            console.log("1-hold ... beep");
        })){
        console.log("first lock is open, not bad");
        buttons[0].holdtime += 1000;
        if (secEnter){
            console.log("2-nd lock is open, very good");
            buttons[0].holdtime += 1000;
            if(thirdEnter){
                console.log("3-d lock is open, good job!");
                leds[0].on();
                buttons[0].holdtime = 1000;
            }else{
            }
        }else{
            console.log("try again, again");
        }
    }else{
        console.log("try again please");
    }



    /!*buttons[0].on("hold", function () {
        console.log("push&held");

        buttons[0].holdtime += 1000;

        console.log(" hold ... time=", buttons[0].holdtime);

        if (buttons[0].holdtime == 4000) {
            leds[0].on();
            buttons[0].holdtime = 1000;
        }
    });*!/

    buttons[2].on("down", function () {
        console.log("butt[2] was pressed");
        leds.off();
    });*/
//_____________________________________________________________________


});

var moduleManager = {};

module.exports = moduleManager;