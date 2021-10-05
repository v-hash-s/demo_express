"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var logger = require('simple-node-logger');
var options = {
    logFilePath: path.join(__dirname, '../logs/logger.log'),
    timestampFormat: 'DD-MM-YYYY HH:mm:ss.SSS',
};
var log = logger.createSimpleFileLogger(options);
var loggerFunction = function (req, res, next) {
    log.info("Request URL : " + JSON.stringify(req.url));
    log.info("Request method : " + JSON.stringify(req.method));
    log.info("Request header :\n");
    for (var key in req.headers) {
        log.info(key + " : " + req.headers[key]);
    }
    log.info("REQUEST BODY : " + JSON.stringify(req.body));
    log.info('-------------------------------------------------');
    log.info('');
    next();
};
module.exports = loggerFunction;
