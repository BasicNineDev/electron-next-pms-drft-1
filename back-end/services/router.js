const express = require('express');
const router = new express.Router();
const outOfOrderReasons = require('../controllers/configuration/reservations/codes/out-of-order-reasons/out-of-order-reasons');

router.route('/configuration/reservations/codes/out-of-order-reasons/:reasonCode?')
    .get(outOfOrderReasons.get)
    .post(outOfOrderReasons.post)
    .put(outOfOrderReasons.put)
    .delete(outOfOrderReasons.delete);

module.exports = router;