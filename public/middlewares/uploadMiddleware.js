"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var formidableMiddleware = require('express-formidable');
app.use('/upload', formidableMiddleware({
    keepExtensions: true,
    uploadDir: path.resolve("../static/photos/uploads")
}));
