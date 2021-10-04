import { folders } from './gallery.js'
const express = require('express');
const router = express.Router();
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const formidableMiddleware = require('express-formidable');
app.use('/upload', formidableMiddleware({
    keepExtensions: true,
    uploadDir: path.resolve("../static/photos/uploads")
}));
import e, { Request, Response } from "express"




router.post('/', function(req: any, res: any){
    console.log(JSON.stringify(req.files.photo));
    console.log(req.fields);

    fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), folders[req.fields.pageNumInForm], req.files.photo.name), () => { });

    res.redirect('/gallery');
 });


module.exports = router;