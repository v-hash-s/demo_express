"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gallery_js_1 = require("./gallery.js");
var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var formidableMiddleware = require('express-formidable');
app.use('/upload', formidableMiddleware({
    keepExtensions: true,
    uploadDir: path.resolve("../static/photos/uploads")
}));
router.post('/', function (req, res) {
    console.log(JSON.stringify(req.files.photo));
    console.log(req.fields);
    fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), gallery_js_1.folders[req.fields.pageNumInForm], req.files.photo.name), function () { });
    res.redirect('/gallery');
});
module.exports = router;
