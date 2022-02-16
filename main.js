const electron = require('electron');
const { shell, app, BrowserWindow, Menu } = electron;
const HOMEPAGE = 'https://m.twitter.com/'

let window;
const ContextMenu = Menu.buildFromTemplate([{
        label: 'Undo',
        role: 'undo',
    }, {
        label: 'Redo',
        role: 'redo',
    }, {
        type: 'separator',
    }, {
        label: 'Cut',
        role: 'cut',
    }, {
        label: 'Copy',
        role: 'copy',
    }, {
        label: 'Paste',
        role: 'paste',
    }, {
        type: 'separator',
    }, {
        label: 'Select all',
        role: 'selectall',
    }
]);

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: false
        }
    });
    window.loadURL(HOMEPAGE);
    window.setMenuBarVisibility(false);

    window.on('closed', () => {
        window = null;
    });

    window.webContents.on("context-menu", function () {
        ContextMenu.popup(window);
    });
});