#! /bin/bash

npm init -y
npm install electron --save-dev

cat << 'EOF' > index.js
const { app, BrowserWindow } = require('electron');
   let mainWindow;
   app.on('ready', () => {
       mainWindow = new BrowserWindow({ 
           width: 800, 
           height: 600,
           webPreferences: {
               nodeIntegration: true,
           },
       });
       mainWindow.loadFile('magi.html');
   });
   app.on('window-all-closed', () => {
       if (process.platform !== 'darwin') app.quit();
   }
);
EOF

npm install electron-packager --save-dev
npx electron-packager . MAGI --platform=win32 --arch=x64 --overwrite
# npx electron-packager . MAGI --platform=win32 --arch=arm64 --overwrite
# npx electron-packager . MAGI --platform=win32 --arch=ia32 --overwrite