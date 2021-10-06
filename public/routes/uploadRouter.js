"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = require("../appLogic/upload");
var express = require('express');
var router = express.Router();
// const path = require('path')
// const bodyParser = require('body-parser');
// const fs = require('fs')
router.use(require('../middlewares/uploadMiddleware'));
router.use(require('./auth'));
router.options('/', function (req, res) {
    res.header('Application-Type', 'multipart/form-data');
    res.send();
});
router.post('/', function (req, res) {
    (0, upload_1.uploadImg)(req, res);
    res.status(302);
    res.redirect('/gallery' + '?page=' + req.fields.pageNumInForm);
});
module.exports = router;
