"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginRouter_1 = require("./loginRouter");
var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
router.post('/', function (req, res) {
    console.log("Body: " + JSON.stringify(req.body));
    if (req.body.email in loginRouter_1.users && req.body.password === loginRouter_1.users[req.body.email]) {
        console.log("Email: " + req.body.email);
        console.log("Password: " + req.body.password);
        res.header({ 'Access-Control-Allow-Origin': '*' });
        res.status(200);
        res.send(JSON.stringify(loginRouter_1.token));
    }
    else {
        console.log('Not found');
    }
});
module.exports = router;
