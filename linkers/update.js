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
        if (message == "exe") {
            var fs = require('fs');
            console.log('works till here')
            fs.readFile('config.js','utf8',async function(err,contents){
                data = await JSON.parse(contents);
                console.log(data)
                if(data.exercise >= 1){
                    excer = new electron.remote.BrowserWindow({
                        width : dimensions.width/2,
                        height : dimensions.height/2,
                        transparent : false,
                        frame : false,
                        alwaysOnTop : true,
                    });
                    excer.loadURL(`file://${__dirname}/shortExcer.html`);
                    setTimeout(function(){ excer.close();}, 15000);
                }
            })
        }
        else if(message == "longe"){
            var fs = require('fs');
            console.log('works till here2')
            fs.readFile('config.js','utf8',async function(err,contents){
                data = await JSON.parse(contents);
                console.log(data)
                if(data.longe >= 1){
                    lexcer = new electron.remote.BrowserWindow({
                        width : dimensions.width/2,
                        height : dimensions.height/2,
                        transparent : false,
                        frame : false,
                        alwaysOnTop : true,
                    });
                    lexcer.loadURL(`file://${__dirname}/longExcer.html`);
                    setTimeout(function(){ lexcer.close();}, 60000);
                }
            })
        }
    })
    instance.on('message', function(message) {
        if (message == "Reminder" || message== "exe" || message == "longe") {
            return;
        }
        var data =[
            {
                "fact": "Eat right to protect your sight"
            },
            {
                "fact": "When reading, the rate of blinking decreases to about 3 to 4 times per minute which is a major reason that eyes become fatigued while reading."
            },
            {
                "fact": "When the eyes dry out or become fatigued due to reading on a computer screen, it can be an indication of Computer Vision Syndrome."
            },
            {
                "fact": "Blinking provides moisture to the eye by irrigation using tears and a lubricant the eyes secrete."
            },
            {
                "fact": "The eyelid provides suction across the eye from the tear duct to the entire eyeball to keep it from drying out."
            },
            {
                "fact": "Blinking also protects the eye from irritants."
            },
            {
                "fact": "The first layer of tears lies right up against the whites of your eyes, and provides an even coat of protein-rich moisture for the second layer to adhere to."
            },
            {
                "fact": "The middle watery layer helps to wash away foreign debris. It also nourishes the cornea of your eyes with minerals, a variety of proteins, and moisture."
            },
            {
                "fact": "The third outer layer of tears is somewhat oily. It serves to prevent the middle watery layer from evaporating quickly, and provides needed lubrication between your eyes and your eyelids."
            }
        ]
        var fs = require('fs');
        var id = Math.floor(Math.random()*6+1)
        var factText = data[id].fact.toString();
        console.log(factText);
        var notification = {
            title:'Eye Blink Alert',
            body: 'Your Blink last minute was: ' + message+"\nFact: "+factText,
        };
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
