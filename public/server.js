"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var gallery_1 = require("./gallery");
var formidableMiddleware = require('express-formidable');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
// const token: Token = {
//     'token': 'token',
// }
// const users: UsersDB = {
//     'asergeev@flo.team': 'jgF5tn4F',
//     'vkotikov@flo.team': 'po3FGas8',
//     'tpupkin@flo.team': 'tpupkin@flo.team',
// }
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
console.log("Static path: " + path.join(__dirname, '../static/photos/fifth_page'));
var loginRoiter = require('./loginRouter.js');
app.use('/', loginRoiter);
// app.get('/', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '../static/pages/index.html'))
// })
// app.post('/', (req: Request, res: Response) => {
//     console.log("Body: " + JSON.stringify(req.body))
//     if (req.body.email in users && req.body.password === users[req.body.email]){
//         console.log("Email: " + req.body.email)
//         console.log("Password: " + req.body.password)
//         res.header( {'Access-Control-Allow-Origin': '*'} );
//         res.status(200);
//         res.send(JSON.stringify(token))
//     } else {
//         console.log('Not found')
//     }
// })
app.get("/gallery", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pageNumber, objects, ejsData, files;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.originalUrl);
                pageNumber = req.query.page;
                if (pageNumber == null) {
                    pageNumber = "1";
                }
                return [4 /*yield*/, (0, gallery_1.sendGalleryObject)(pageNumber)];
            case 1:
                objects = _a.sent();
                console.log("Objects: " + JSON.stringify(objects));
                ejsData = {};
                console.log("!!!!");
                files = fs.readdir(destination, function (err, files) {
                    if (files.length <= 0) {
                        ejsData = { objects: objects };
                        res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData: ejsData });
                    }
                    else {
                        console.log('NOT EMPRTY');
                        console.log(files);
                        var photo = files;
                        console.log(photo);
                        ejsData = { objects: objects, photo: photo };
                        res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData: ejsData });
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
console.log(destination);
app.post('/upload', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(JSON.stringify(req.files.photo));
        console.log(req.fields);
        fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), gallery_1.folders[req.fields.pageNumInForm], req.files.photo.name), function () { });
        res.redirect('/gallery');
        return [2 /*return*/];
    });
}); });
app.listen(8080, function () { return console.log('At 8080 port...'); });
