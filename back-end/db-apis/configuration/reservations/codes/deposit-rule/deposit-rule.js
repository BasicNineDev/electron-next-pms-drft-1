const database = require('../../../../../services/database.js');
const oracledb = require('oracledb');

const baseQuery =
  `SELECT    RULE_TYPE
           , RULE_DESCRIPTION
           , DEP_AMOUNT
           , DEP_AMOUNT_TYPE
           , DEP_DAYS_PRIOR_TO_ARRIVAL
           , DEP_DAYS_AFTER_BOOKING
           , ORDER_BY
  FROM       DEPOSIT_CANCEL_RULES
  WHERE      PARENT_RATE_DC_SEQ IS NULL
  `;

async function find() {
  let query = baseQuery;
  const binds = {};

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
