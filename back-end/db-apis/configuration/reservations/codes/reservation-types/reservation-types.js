const database = require('../../../../../services/database.js');
const oracledb = require('oracledb');

const baseQuery =
  ` SELECT   GUARANTEE_CODE
        , SHORT_DESCRIPTION
        , PHONE_REQUIRED_YN
        , ADDRESS_REQUIRED_YN
        , CREDIT_CARD_REQUIRED_YN
        , MANDATORY_ARR_TIME_YN
        , RESERVE_INVENTORY_YN
        , DEPOSIT_REQUIRED_YN
        , ORDER_BY
  FROM    RESORT_GUARANTEES
 WHERE    RESORT = 'RHSSC'
 ORDER    BY ORDER_BY`;

async function find() {
  let query = baseQuery;
  const binds = {};

  const result = await  database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
