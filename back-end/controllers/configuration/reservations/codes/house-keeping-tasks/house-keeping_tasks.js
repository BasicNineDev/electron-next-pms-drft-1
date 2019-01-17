const houseKeepingTasks = require('../../../../../db-apis/configuration/reservations/codes/house-keeping-tasks/house-keeping-tasks.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.reasonCode = req.params.reasonCode;

    const rows = await houseKeepingTasks.find(context);

    if (req.params.reasonCode) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

function getHouseKeepingTaskFromRec(req) {
  const houseKeepingTask = {
      TASK_CODE: req.body.TASK_CODE
    , RESORT: req.body.RESORT
    , DESCRIPTION: req.body.DESCRIPTION
    , LONG_DESCRIPTION: req.body.LONG_DESCRIPTION
    , ORDER_SEQ: req.body.ORDER_SEQ
  };

  return houseKeepingTask;
}

async function post(req, res, next) {
  try {
    let houseKeepingTask = getHouseKeepingTaskFromRec(req);
    console.log(houseKeepingTasks);
    houseKeepingTask = await houseKeepingTasks.create(houseKeepingTask);

    res.status(201).json(houseKeepingTask);
  } catch(err) {
    next(err);
  }
}

async function put(req, res, next) {
  try {

    let houseKeepingTask = getHouseKeepingTaskFromRec(req);
    houseKeepingTask.REASON_CODE = req.params.reasonCode;
    houseKeepingTask = await houseKeepingTasks.update(houseKeepingTask);

    if (houseKeepingTask !== null) {
      res.status(200).json(houseKeepingTask);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

async function del(req, res, next) {
  try {
    const reasonCode = req.param.REASON_CODE;

    const success = await houseKeepingTasks.delete(reasonCode);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}


module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
module.exports.delete = del;
