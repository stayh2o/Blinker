const electron  = require('electron');
const path      = require('path');
const url       = require('url');

const {app, BrowserWindow, Menu, clipboard} = electron;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ backgroundColor: '#0099cc' });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes:  true
    }));
    mainWindow.on('closed', () => {
        app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate =  [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: 'Window',
        submenu: [
            {
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Learn More'
            }
        ]
    }
];

if (process.platform === 'darwin') {
    mainMenuTemplate.unshift({});
}
