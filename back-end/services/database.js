var path = require('path');
process.env['PATH'] = path.join(__dirname, '/instantclient') + ';' + process.env['PATH'];

const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');

async function initialize() {
    const pool = await oracledb.createPool(dbConfig.pmsPool);
}

async function close() {
    await oracledb.getPool().close();
}

function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
        let conn;

        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;

        try {
            conn = await oracledb.getConnection();
            console.log('query statement:', statement);
            console.log('bind:', binds);
            const result = await conn.execute(statement, binds, opts);
            console.log('result: ', result);

            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            if ( conn) {
                try {
                    await conn.close();

                } catch (err) {
                    console.log(err);
                }
            }
        }
    });
}

module.exports.simpleExecute = simpleExecute;
module.exports.close = close;
module.exports.initialize = initialize;