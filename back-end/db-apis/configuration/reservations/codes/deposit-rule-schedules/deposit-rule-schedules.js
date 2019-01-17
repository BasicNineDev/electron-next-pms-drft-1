const database = require('../../../../../services/database.js');
const oracledb = require('oracledb');

const baseQuery =
  `SELECT  RULE_TYPE
        , '' AS BLOCK
        , RATE_CODE
        , RESERVATION_TYPE
        , BEGIN_DATE
        , END_DATE
        , OVERRIDE_YN
        , ORDER_BY
        , RULE_DESCRIPTION
  FROM    DEPOSIT_CANCEL_RULES 
 WHERE    PARENT_RATE_DC_SEQ IS NOT NULL
  `;

async function find() {
  let query = baseQuery;
  const binds = {};

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
