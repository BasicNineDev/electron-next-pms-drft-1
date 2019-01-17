const depositRule = require('../../../../../db-apis/configuration/reservations/codes/deposit-rule/deposit-rule.js');

async function get(req, res, next) {
  try{

    const rows = await depositRule.find();

    res.status(200).json(rows);

  }catch(err){
    next(err);
  }
}

module.exports.get = get;
