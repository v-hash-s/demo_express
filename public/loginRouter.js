"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var token = {
    'token': 'token',
};
var users = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
};
app.use(express.static(path.join(__dirname, '../static/pages')));
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../static/pages/index.html'));
});
router.post('/', function (req, res) {
    console.log("Body: " + JSON.stringify(req.body));
    if (req.body.email in users && req.body.password === users[req.body.email]) {
        console.log("Email: " + req.body.email);
        console.log("Password: " + req.body.password);
        res.header({ 'Access-Control-Allow-Origin': '*' });
        res.status(200);
        res.send(JSON.stringify(token));
    }
    else {
        console.log('Not found');
    }
});
module.exports = router;
