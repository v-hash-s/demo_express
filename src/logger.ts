import {Request, Response} from "express";

const path = require('path');

const logger = require('simple-node-logger');
const options = {
    logFilePath: path.join(__dirname, '../logs/logger.log'),
    timestampFormat: 'DD-MM-YYYY HH:mm:ss.SSS',
}

const log = logger.createSimpleFileLogger(options);

const loggerFunction =  (req: Request, res: Response, next: Function) => {

    log.info(`REQUEST URL : ${JSON.stringify(req.url)}`);
    log.info(`REQUEST METHOD : ${JSON.stringify(req.method)}`);
    log.info(`REQUEST HEADERS :\n`);
    for(let key in  req.headers) {
        log.info(`${key} : ${req.headers[key]}`);
    }

    log.info(`REQUEST BODY : ${JSON.stringify(req.body)}`);
    log.info('-------------------------------------------------');
    log.info('');
    next();
};

module.exports = loggerFunction;