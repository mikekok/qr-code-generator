const electron = require('electron')
const path = require('path')
const url = require('url')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 350,
        resizable: false,
        frame: false,
        icon: __dirname + '/assets/img/icon.ico'
    })

    // mainWindow.setMenu(null)

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)
