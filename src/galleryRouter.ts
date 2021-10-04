const express = require('express');
import e, { Request, Response } from "express"
const router = express.Router();
const path = require('path')
const app = express()
import { sendGalleryObject, folders } from "./gallery";
const fs = require('fs')
const destination = path.join('../static/photos/uploads');
app.use(express.static(destination))
app.use('/static/photos/uploads',express.static('../static/photos/uploads'))
app.set("view engine", "ejs");
let cookieParser = require('cookie-parser')
app.use(cookieParser())
// import { isValid } from './loginRouter'
router.use(require('./auth'));

router.options('/', (req: Request, res: Response) => {
    
    res.header({'Access-Control-Allow-Origin': '*' });
    res.header({ 'Access-Control-Allow-Credentials': 'true' });
    res.header({ 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST' });
    res.header({ 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers' });
    res.header('Application-Type', 'multipart/form-data');
    res.send();
    
})

router.get('/', async function(req: Request, res: Response){
    console.log(req.headers)
  
    console.log(req.originalUrl)
    let pageNumber = req.query.page;
    if (pageNumber == null) {
        pageNumber = "1";
    }

   
    let objects = await sendGalleryObject(pageNumber);
    console.log("Objects: " + JSON.stringify(objects))
    let ejsData = { }
    console.log("!!!!")
    let files = fs.readdir(destination, (err: any, files: any) => {
        if(files.length <= 0){
            ejsData = { objects }
            res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData })
        } else {
            let photo = files;
            ejsData = {objects, photo}
            res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData })
        }
    })
 });



 module.exports = router;