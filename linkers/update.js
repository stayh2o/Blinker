const electron      = require('electron');
const path          = require('path');
const url           = require('url');
const screenElectron  = electron.screen;
const mainScreen      = screenElectron.getPrimaryDisplay();
const dimensions      = mainScreen.size;

function start_python_func() {
    console.log("ElectronJs made a call to Python");
    var path = require("path");
    var {PythonShell} = require('python-shell');

    var options = {
        scriptPath: path.join(__dirname, '/engine/'),
    }
    var instance = new PythonShell('python_loop.py', options);
    instance.on('message', function(message) {
        if (message == "Reminder") {
            var fs = require('fs');
            fs.readFile('config.js', 'utf8', async function(err, contents) {
                data = await JSON.parse(contents);
                console.log(data);
                if (data.twenty == 1 && data.status == 1) {
                    swal("20 minutes reminder! Look at a far object.");
                }
            });
        }
    })

    instance.on('message', function(message) {
        if (message == "Reminder") {
            return;
        }
        console.log(message);
        var notification = {
            title:'Eye Blink Alert',
            body: 'Your Blink last minute was: ' + message,
        };
        var fs = require('fs');
        fs.readFile('config.js', 'utf8', function(err, contents) {
            data = JSON.parse(contents);
            console.log(data);
            if (data.notification == 1) {
                myNotification = new window.Notification(notification.title, notification);
            }
            if(data.black == 1){
                splash = new electron.remote.BrowserWindow({
                    width: dimensions.width,
                    height: dimensions.height,
                    transparent: false,
                    frame: false,
                    alwaysOnTop: true,
                    fullscreen: true
                });
                splash.loadURL(`file://${__dirname}/splash.html`);
                setTimeout(function () { splash.close();}, 600);
            }
        });
    });
}
