var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/liveHealthy';
var db = pgp(connectionString);

function getAllReminders(req, res, next) {
    db.any('select * from Reminder')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL reminders'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getImmediateReminders(req, res, next) {
    db.any('select * from Reminder')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Immediate reminders'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getAllGoals(req, res, next) {
    db.any('select * from Goal')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All goals'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getNearbyUsers(req, res, next) {
    db.any('select * from User')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Nearby users'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createReminder(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('INSERT INTO Reminder (name, active, datetime, goal_id)' +
        'VALUES (${name}, true, ${datetime}, ${goal_id});',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one reminder'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createGoal(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('INSERT INTO Goal (name, active, description)' +
        'VALUES (${name}, true, ${description});',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one goal'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllReminders: getAllReminders,
    getImmediateReminders: getImmediateReminders,
    createReminder: createReminder,
    createGoal: createGoal,
    getAllGoals: getAllGoals,
    getNearbyUsers: getNearbyUsers
};