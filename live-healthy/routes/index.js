var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/all-goals', db.getAllGoals);
router.get('/api/all-reminders', db.getAllReminders);
router.get('/api/immediate-reminders', db.getImmediateReminders);
router.get('/api/nearyby-users', db.getNearbyUsers);
router.put('/api/create-goal', db.createGoal);
router.put('/api/create-reminder', db.createReminder);


module.exports = router;
