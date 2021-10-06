"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = exports.isValidUser = exports.users = exports.token = void 0;
exports.token = {
    'token': 'token',
};
exports.users = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
};
function isValidUser(req) {
    if (req.body.email in exports.users && req.body.password === exports.users[req.body.email]) {
        return true;
    }
}
exports.isValidUser = isValidUser;
function sendToken() {
    return JSON.stringify(exports.token);
}
exports.sendToken = sendToken;
