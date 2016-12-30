var Imap = require('imap');
var five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});
board.on("ready", function () {


    var imap = new Imap({
        user: 'd.bushtyn@pozitiff.ua',
        password: 'dimabush09',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: {rejectUnauthorized: false}
    });

    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
    }

    imap.once('ready', function () {
        openInbox(function (err, box) {
            if (err) {
                throw err;
            } else {
                console.log("here our 'box' should be");
                imap.on('mail', function (num) {
                    console.log("New message arrived: ", num);
                    var led7 = new five.Led(7);
                    led7.blink(300);
                });
            }
        });
    });

    imap.once('error', function (err) {
        console.log(err);
    });

    imap.once('end', function () {
        console.log('Connection ended');
    });


    imap.connect();
});


