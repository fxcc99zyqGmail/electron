const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    
    // win.loadURL('https://alitily.com/workTime.html')
    win.loadFile('./page/index.html')
}

// app.whenReady().then(createWindow)
app.on('ready', () => {
    createWindow();
    ipcMain.handle('ping', () => 'pong')
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})