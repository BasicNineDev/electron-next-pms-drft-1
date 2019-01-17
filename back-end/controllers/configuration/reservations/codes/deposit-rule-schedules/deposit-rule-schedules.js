const depositRuleSchedules = require('../../../../../db-apis/configuration/reservations/codes/deposit-rule-schedules/deposit-rule-schedules.js');

async function get(req, res, next) {
  try{

    const rows = await depositRuleSchedules.find();

    res.status(200).json(rows);

  }catch(err){
    next(err);
  }
}

module.exports.get = get;
