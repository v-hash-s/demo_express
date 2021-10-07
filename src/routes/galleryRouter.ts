import { Request, Response } from "express"
import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'


const router = express.Router();
const app = express()
import { sendGalleryObject, folders } from "../appLogic/gallery";
app.set("view engine", "ejs");
app.use(cookieParser())
router.use(require('../middlewares/auth'));


router.options('/', (req: Request, res: Response) => {

    res.header('Application-Type', 'multipart/form-data');
    res.send();
    
})

router.get('/', async function(req: Request, res: Response){
    let pageNumber = req.query.page;
    if (pageNumber == null) {
        res.redirect("/gallery?page=1")
    }
    let objects = await sendGalleryObject(pageNumber);
    let ejsData = {}
    ejsData = { objects };
    res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData })
 });



export default router