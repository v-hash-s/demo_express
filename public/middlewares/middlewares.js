"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = void 0;
var express = require('express');
var app = express();
var formidableMiddleware = require('express-formidable');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('../logger');
app.use(cors({
    origin: '*'
}));
var middlewares = function (req, res, next) {
    app.use(express.json(), logger);
    app.set("view engine", "ejs");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    var destination = path.join('../static/photos/uploads');
    app.use(express.static(destination));
    app.use('/static/photos/uploads', express.static('../static/photos/uploads'));
    app.set("view engine", "ejs");
    app.use('/upload', formidableMiddleware({
        keepExtensions: true,
        uploadDir: path.resolve("../static/photos/uploads")
    }));
    // const logger = require('../logger');
    // app.use(cors({
    //   origin: '*'
    // }))
    app.use(express.static(path.join(__dirname, '../static/pages')));
    app.use(express.static(path.join(__dirname, '../static/photos/first_page')));
    app.use(express.static(path.join(__dirname, '../static/photos/second_page')));
    app.use(express.static(path.join(__dirname, '../static/photos/third_page')));
    app.use(express.static(path.join(__dirname, '../static/photos/fourth_page')));
    app.use(express.static(path.join(__dirname, '../static/photos/fifth_page')));
    var cookieParser = require('cookie-parser');
    app.use(cookieParser());
    next();
};
exports.middlewares = middlewares;
