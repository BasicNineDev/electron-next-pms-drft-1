const reservationTypes = require('../../../../../db-apis/configuration/reservations/codes/reservation-types/reservation-types.js');

async function get(req, res, next) {
  try{

    const rows = await reservationTypes.find();

    res.status(200).json(rows);

    console.log('컨트롤러=======>6666' + reservationTypes);
  } catch (err){
    next(err);
  }

}
/*
function getReservationTypeFromRec(req) {
  const reservationType = {
      GUARANTEE_CODE: req.body.GUARANTEE_CODE
    , SHORT_DESCRIPTION: req.body.SHORT_DESCRIPTION
    //, CASH_BASIS_YN: req.body.CASH_BASIS_YN
    //, CRO_ALLOWED_YN
    , PHONE_REQUIRED_YN: req.body.PHONE_REQUIRED_YN
    , ADDRESS_REQUIRED_YN: req.body.ADDRESS_REQUIRED_YN
    , CREDIT_CARD_REQUIRED_YN: req.body.CREDIT_CARD_REQUIRED_YN
    , MANDATORY_ARR_TIME_YN: req.body.MANDATORY_ARR_TIME_YN
    , RESERVE_INVENTORY_YN: req.body.RESERVE_INVENTORY_YN
    , DEPOSIT_REQUIRED_YN: req.body.DEPOSIT_REQUIRED_YN
    , ORDER_BY: req.body.ORDER_BY
  };

  return reservationType;

}
*/
module.exports.get = get;
