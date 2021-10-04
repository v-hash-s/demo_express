"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var formidableMiddleware = require('express-formidable');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var logger = require('./logger');
app.use(express.json(), logger);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/upload', formidableMiddleware({
    keepExtensions: true,
    uploadDir: path.resolve("../static/photos/uploads")
}));
app.use(express.static(path.join(__dirname, '../static/pages')));
app.use(express.static(path.join(__dirname, '../static/photos/first_page')));
app.use(express.static(path.join(__dirname, '../static/photos/second_page')));
app.use(express.static(path.join(__dirname, '../static/photos/third_page')));
app.use(express.static(path.join(__dirname, '../static/photos/fourth_page')));
app.use(express.static(path.join(__dirname, '../static/photos/fifth_page')));
var destination = path.join('../static/photos/uploads');
app.use(express.static(destination));
app.use('/static/photos/uploads', express.static('../static/photos/uploads'));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var loginRouter = require('./loginRouter.js');
var galleryRouter = require('./galleryRouter.js');
var uploadRouter = require('./uploadRouter.js');
var loginApi = require('./loginApi');
app.use('/', loginRouter);
app.use('/gallery', galleryRouter);
app.use('/upload', uploadRouter);
app.use('/api-login', loginApi);
app.all('*', function (req, res) {
    res.writeHead(404);
    res.end('Not Found');
    res.send("Page " + req.url + " not found");
});
app.listen(8080, function () { return console.log('At 8080 port...'); });
