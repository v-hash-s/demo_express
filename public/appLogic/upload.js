"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImg = void 0;
var fs = require("fs");
var gallery_js_1 = require("../appLogic/gallery.js");
var express = require("express");
var path = require("path");
var app = express();
function uploadImg(req, res) {
    if (req.files.photo.size != '0') {
        fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), gallery_js_1.folders[req.fields.pageNumInForm], req.files.photo.name), function () { });
    }
    else {
        fs.unlink(req.files.photo.path, function () { });
    }
}
exports.uploadImg = uploadImg;
