"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = require("../appLogic/upload");
var express = require("express");
var router = express.Router();
router.use(require('../middlewares/auth'));
router.options('/', function (req, res) {
    res.header('Application-Type', 'multipart/form-data');
    res.send();
});
router.post('/', function (req, res) {
    (0, upload_1.uploadImg)(req, res);
    res.status(302);
    res.redirect('/gallery' + '?page=' + req.fields.pageNumInForm);
});
exports.default = router;
