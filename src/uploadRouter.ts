import { folders } from './gallery.js'
import e, { Request, Response } from "express"
const express = require('express');


const router = express.Router();
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs')
let cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const formidableMiddleware = require('express-formidable');
app.use('/upload', formidableMiddleware({
    keepExtensions: true,
    uploadDir: path.resolve("../static/photos/uploads")
}));

router.use(require('./auth'));

router.options('/', (req: Request, res: Response) => {
    
    res.header({'Access-Control-Allow-Origin': '*' });
    res.header({ 'Access-Control-Allow-Credentials': 'true' });
    res.header({ 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST' });
    res.header({ 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers' });
    res.header('Application-Type', 'multipart/form-data');
    
    res.send();
    
})


router.post('/', function (req: any, res: any) {

    if (req.files.photo.size != '0') {
        fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), folders[req.fields.pageNumInForm], req.files.photo.name), () => { });
    } else {
        fs.unlink(req.files.photo.path, () => { });
    }
    res.status(302);
    res.redirect('/gallery' + '?page=' + req.fields.pageNumInForm);
 });


module.exports = router;