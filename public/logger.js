"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = __importStar(require("simple-node-logger"));
var logInfo = log.createRollingFileLogger({
    errorEventName: 'error',
    logDirectory: '../logs',
    fileNamePattern: 'logFile-<DATE>.log',
    dateFormat: 'DD-MM-YYYY HH',
    timestampFormat: 'DD-MM-YYYY HH:mm:ss.SSS'
});
function loggerFunction(reqOrMsg, res, next) {
    if (typeof reqOrMsg === 'string') {
        logInfo.info("\u041E\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: " + reqOrMsg);
    }
    else {
        logInfo.info("\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440: Method - " + reqOrMsg.method + "; \n        URL - " + reqOrMsg.url + "; \n        Body - " + JSON.stringify(reqOrMsg.body) + "; \n        Headers - " + JSON.stringify(reqOrMsg.headers));
    }
    if (next) {
        next();
    }
}
module.exports = loggerFunction;
