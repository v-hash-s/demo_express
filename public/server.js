"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var formidableMiddleware = require("express-formidable");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger_1 = require("./logger");
// const logger = require('./logger');
app.use(cors({
    origin: '*'
}));
app.use(express.json(), logger_1.default);
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
app.use(cookieParser());
var loginRouter_1 = require("./routes/loginRouter");
var galleryRouter_1 = require("./routes/galleryRouter");
var uploadRouter_1 = require("./routes/uploadRouter");
// const loginRouter = require('./loginRouter.js')
// const galleryRouter = require('./galleryRouter.js')
// const uploadRouter = require('./uploadRouter.js')
app.use('/', loginRouter_1.default);
app.use('/gallery', galleryRouter_1.default);
app.use('/upload', uploadRouter_1.default);
app.all('*', function (req, res) {
    res.status(404).end("Page " + req.url + " not found");
});
app.listen(8080, function () { return console.log('At 8080 port...'); });
