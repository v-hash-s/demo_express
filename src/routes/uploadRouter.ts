import { folders } from '../appLogic/gallery.js'
import { Request, Response } from "express"
import { uploadImg } from '../appLogic/upload'

import * as express from 'express'
const router = express.Router();

router.use(require('../middlewares/auth'));

router.options('/', (req: Request, res: Response) => {
    res.header('Application-Type', 'multipart/form-data');
    res.send();
    
})

router.post('/', function (req: any, res: any) {

    uploadImg(req, res);
    res.status(302);
    res.redirect('/gallery' + '?page=' + req.fields.pageNumInForm);
 });

export default router