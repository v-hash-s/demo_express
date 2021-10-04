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
router.get('/', async function(req: Request, res: Response){
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
            console.log('NOT EMPRTY')
            

            console.log(files)
            let photo = files;
            console.log(photo)
            ejsData = {objects, photo}
            res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData })
        }
    })
 });



 module.exports = router;