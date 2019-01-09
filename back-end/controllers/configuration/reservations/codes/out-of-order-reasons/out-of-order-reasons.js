const outOfOrderReasons = require('../../../../../db-apis/configuration/reservations/codes/out-of-order-reasons/out-of-order-reasons.js');

async function get(req, res, next) {
    try {
        const context = {};

        context.reasonCode = req.params.reasonCode;

        const rows = await outOfOrderReasons.find(context);

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

function getOutOfOrderReasonFromRec(req) {
    const outOfOrderReason = {
          REASON_CODE: req.body.REASON_CODE
        , RESORT: req.body.RESORT
        , DESCRIPTION: req.body.DESCRIPTION
        , INACTIVE_DATE: req.body.INACTIVE_DATE
        , INSERT_DATE: req.body.INSERT_DATE
        , UPDATE_DATE: req.body.UPDATE_DATE
        , INSERT_USER: req.body.INSERT_USER
        , UPDATE_USER: req.body.UPDATE_USER
        , ORDER_BY: req.body.ORDER_BY
    };

    return outOfOrderReason;
}

async function post(req, res, next) {
    try {
        let outOfOrderReason = getOutOfOrderReasonFromRec(req);
        console.log(outOfOrderReason);
        outOfOrderReason = await outOfOrderReasons.create(outOfOrderReason);

        res.status(201).json(outOfOrderReason);
    } catch(err) {
        next(err);
    }
}

async function put(req, res, next) {
    try {

        let outOfOrderReason = getOutOfOrderReasonFromRec(req);
        outOfOrderReason.REASON_CODE = req.params.reasonCode;
        outOfOrderReason = await outOfOrderReasons.update(outOfOrderReason);

        if (outOfOrderReason !== null) {
            res.status(200).json(outOfOrderReason);
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

        const success = await outOfOrderReasons.delete(reasonCode);

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