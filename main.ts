import { app, BrowserWindow, screen, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';
import ipcMain = Electron.ipcMain;

let win, child, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');



const menu = [
  {
    label: 'Reservations',
    submenu: [
      {
        label: 'Codes',
        submenu: [
          {
            label: 'Out of Order reasons',
            click() {
              openChildWindow('/reservation/codes/out-of-order-reasons', serve);
            }
          },
          {
            label: 'Room Conditions',
            click() {
              openChildWindow('/reservation/codes/room-conditions', serve);
            }
          },
          {
            label: 'Housekeeping Attendants',
            click() {
              openChildWindow('/reservation/codes/housekeeping-attendants', serve);
            }
          },
          {
            label: 'Housekeeping Tasks',
            click() {
              openChildWindow('/reservation/codes/housekeeping-tasks', serve);
            }
          },
          {
            label: 'Reservation Types',
            click() {
              openChildWindow('/reservation/codes/reservation-types', serve);
            }
          },
          {
            label: 'Deposit Rules',
            click() {
              openChildWindow('/reservation/codes/deposit-rule', serve);
            }
          },
          {
            label: 'Deposit Rule Schedules',
            click() {
              openChildWindow('/reservation/codes/deposit-rule-schedules', serve);
            }
          },
          {
            label: 'Discount Reasons',
            click() {}
          },
          {
            label: 'Room Move Resasons',
            click() {}
          },
          {
            label: 'Cancellation Rasons',
            click() {}
          },
          {
            label: 'Origin Codes',
            click() {}
          },
          {
            label: 'Trace Texts',
            click() {}
          },
          {
            label: 'Waitlist Priorities',
            click() {}
          },
          {
            label: 'Waitlist Codes',
            click() {}
          },
          {
            label: 'Alert Definition',
            submenu: [
              {
                label: 'Alert Messages',
                click() {}
              },
              {
                label: 'Global Alerts',
                click() {}
              }
            ]
          },
          {
            label: 'Custom',
            submenu: [
              {
                label: 'Guest Status',
                click() {}
              },
              {
                label: 'Guest Type',
                click() {}
              },
              {
                label: 'Country Entry Point',
                click() {}
              },
              {
                label: 'Purpose of Stay',
                click() {}
              },
              {
                label: 'Immigration Status',
                click() {}
              },
            ]
          },
        ]
      }
    ]
  }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

/*const { webContents } = require('electron')
console.log(webContents)
console.log(webContents.getAllWebContents())*/



function openChildWindow(menuUrl, mode) {
  const newWin = new BrowserWindow({show: false, width: 1182, height: 630 });
  newWin.webContents.openDevTools();
  newWin.setMenu(null);
  newWin.once('ready-to-show', () => newWin.show());
  newWin.on('close', () => { win = null; });
  console.log('serve type', mode);
  if (mode) {
    console.log('serve type', 'http://localhost:4200/#' + menuUrl);

    newWin.loadURL('http://localhost:4200/#' + menuUrl);
  } else {
    newWin.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true,
      hash: menuUrl
    }));
  }
}

function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  });

  win.webContents.on('new-window', (event, uri) => {
    event.preventDefault();
    console.log('new-window');
    const newWin = new BrowserWindow({show: false });
    newWin.webContents.openDevTools();
    newWin.once('ready-to-show', () => newWin.show());
    newWin.loadURL(url.format({
      /*pathname: path.join(__dirname, 'dist/index.html'),*/
      /*pathname: path.join(__dirname, 'dist/index.html#/reservation/codes/out-of-order-reasons'),*/
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true,
      hash: uri
    }));
  });


  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    console.log('here');
    win.loadURL('http://localhost:4200');
  } else {
    console.log('there');
    win.loadURL(url.format({
      /*pathname: path.join(__dirname, 'dist/index.html'),*/
      /*pathname: path.join(__dirname, 'dist/index.html#/reservation/codes/out-of-order-reasons'),*/
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true/*,
      hash: '/reservation/codes/out-of-order-reasons'*/
    }));
  }

  // win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
