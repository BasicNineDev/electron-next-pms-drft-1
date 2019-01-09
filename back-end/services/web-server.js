const http = require('http');
const express = require('express')
const morgan = require('morgan')
const webServerConfig = require('../config/web-server.js');
const router = require('./router.js');
const database = require('./database.js');
const path = require('path');


let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);

        app.use(morgan('combined'));
        app.use(express.json({
            reviver: reviveJson
        }));
        app.use('/api', router);
        /*app.get('/', async (req, res) => {
            const result = await database.simpleExecute('select user, systimestamp from dual');
            const user = result.rows[0].USER;
            const date = result.rows[0].SYSTIMESTAMP;

            // res.end(`DB user: ${user}\nDate: ${date}`);
        });*/


        // 프론트 앱 정적 콘텐츠 폴더 지정
        const distPath = path.join(`${__dirname}../../../dist`);
        app.use(express.static(distPath));

      app.get(['**'], function (req, res) {
        res.sendFile(path.join(__dirname + '../../../dist/index.html'));
      });


      httpServer.listen(webServerConfig.port)
            .on('listening', () => {
                console.log(`Web server listening on localhost:${webServerConfig.port}`);

                resolve();
            })
            .on('error', err => {
                reject(err);
            });
    });
}

function close() {
    return new Promise((resolve, reject) => {
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

const ISO8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function reviveJson(key, value) {
    if (typeof value ==='string' && ISO8601RegExp.test(value)) {
        return new Date(value);
    } else {
        return value;
    }
}


module.exports.initialize = initialize;
module.exports.close = close;
