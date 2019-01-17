const database = require('../../../../../services/database.js');
const oracledb = require('oracledb');

const baseQuery =
  `SELECT   TASK_CODE
       , DESCRIPTION
       , LONG_DESCRIPTION
       , ORDER_SEQ            
  FROM   RESORT_HK_TASKS
 WHERE   RESORT = 'RHSSC'
   AND   CUSTOMIZABLE_YN = 'Y'`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.reasonCode) {
    binds.REASON_CODE = context.reasonCode;

    query += `\nWHERE REASON_CODE = :REASON_CODE`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

const createSql =
  `
    INSERT INTO RESORT_ROOM_STATUS_REASON (
     REASON_CODE,
     RESORT,
     DESCRIPTION,
     INACTIVE_DATE,
     INSERT_DATE,
     UPDATE_DATE,
     INSERT_USER,
     UPDATE_USER,
     ORDER_BY 
     ) VALUES (
      :REASON_CODE,
      :RESORT,
      :DESCRIPTION,
      :INACTIVE_DATE,
      :INSERT_DATE,
      :UPDATE_DATE,
      :INSERT_USER,
      :UPDATE_USER,
      :ORDER_BY   
     )`;

async function create(reason) {
  console.log('is this? ', reason);
  const houseKeepingTasks = Object.assign({}, reason);

  /*houseKeepingTasks.REASON_CODE = {
      dir: oracledb.BIND_OUT,
      type: oracledb.DB_TYPE_NVARCHAR
  }*/

  const result = await database.simpleExecute(createSql, houseKeepingTasks);
  if (result.rowsAffected && result.rowsAffected === 1) {
    return houseKeepingTasks;
  } else {
    return null;
  }
}

const updateSql =
  `
         UPDATE RESORT_ROOM_STATUS_REASON
            SET RESORT = :RESORT, 
                DESCRIPTION = :DESCRIPTION, 
                UPDATE_USER = :UPDATE_USER, 
                ORDER_BY = :ORDER_BY 
            WHERE REASON_CODE = :REASON_CODE`;

async function update(reason) {
  console.log('do updating:', reason);
  const houseKeepingTasks = Object.assign({}, reason);
  console.log('do outOfOrderReason:', houseKeepingTasks);

  const result = await database.simpleExecute(updateSql, houseKeepingTasks);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return houseKeepingTasks;
  } else {
    return null;
  }
}

const deleteSql =
  `BEGIN
    
         DELETE FROM RESORT_ROOM_STATUS_REASON
            WHERE REASON_CODE = :REASON_CODE;

         :ROWCOUNT := sql%rowcount;
    END;
   `

async function del(reasonCode) {
  const binds = {
    REASON_CODE: reasonCode,
    ROWCOUNT: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }

  const result = await database.simpleExecute(deleteSql, binds);

  return result.outBinds.rowcount === 1;
}

module.exports.find = find;
module.exports.create = create;
module.exports.update = update;
module.exports.delete  = del;
