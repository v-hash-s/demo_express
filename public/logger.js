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
    log.info("REQUEST URL : " + JSON.stringify(req.url));
    log.info("REQUEST METHOD : " + JSON.stringify(req.method));
    log.info("REQUEST HEADERS :\n");
    for (var key in req.headers) {
        log.info(key + " : " + req.headers[key]);
    }
    log.info("REQUEST BODY : " + JSON.stringify(req.body));
    log.info('-------------------------------------------------');
    log.info('');
    next();
};
module.exports = loggerFunction;
