"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.token = void 0;
var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var login_1 = require("../appLogic/login");
// let cookieParser = require('cookie-parser')
// app.use(cookieParser())
router.use(require('../middlewares/loginMiddleware'));
exports.token = {
    'token': 'token',
};
exports.users = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
};
// app.use(express.static(path.join(__dirname, '../static/pages')))
router.options('/', function (req, res) {
    res.header('Application-Type', 'multipart/form-data');
    res.send();
});
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../static/pages/index.html'));
});
router.post('/', function (req, res) {
    if ((0, login_1.isValidUser)(req)) {
        res.cookie('token', 'token');
        res.status(200);
        res.send((0, login_1.sendToken)());
    }
    else {
        res.status(401);
        res.send({ errorMessage: 'Invalid email or password' });
    }
});
module.exports = router;
