const express = require('express');
const router = new express.Router();
const outOfOrderReasons = require('../controllers/configuration/reservations/codes/out-of-order-reasons/out-of-order-reasons');
const houseKeepingTasks = require('../controllers/configuration/reservations/codes/house-keeping-tasks/house-keeping_tasks');
const reservationTypes = require('../controllers/configuration/reservations/codes/reservation-types/reservation-types');
const depositRule = require('../controllers/configuration/reservations/codes/deposit-rule/deposit-rule');
const depositRuleSchedules = require('../controllers/configuration/reservations/codes/deposit-rule-schedules/deposit-rule-schedules');

router.route('/configuration/reservations/codes/out-of-order-reasons/:reasonCode?')
    .get(outOfOrderReasons.get)
    .post(outOfOrderReasons.post)
    .put(outOfOrderReasons.put)
    .delete(outOfOrderReasons.delete);

router.route('/configuration/reservations/codes/house-keeping-tasks/:reasonCode?')
  .get(houseKeepingTasks.get)
  .post(houseKeepingTasks.post)
  .put(houseKeepingTasks.put)
  .delete(houseKeepingTasks.delete);

router.route('/configuration/reservations/codes/reservation-types/')
  .get(reservationTypes.get);

router.route('/configuration/reservations/codes/deposit-rule/')
  .get(depositRule.get);

router.route('/configuration/reservations/codes/deposit-rule-schedules/')
  .get(depositRuleSchedules.get);

module.exports = router;
