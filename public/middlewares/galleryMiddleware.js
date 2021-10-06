"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieParser = void 0;
app.set("view engine", "ejs");
exports.cookieParser = require('cookie-parser');
app.use((0, exports.cookieParser)());
app.use(require('./auth'));
