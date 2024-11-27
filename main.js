const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 550,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    icon: __dirname + '/icon.ico', // Add this line to set the window icon
  });

  mainWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
