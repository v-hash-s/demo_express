import { folders } from '../appLogic/gallery.js'
import e, { Request, Response } from "express"
import { uploadImg } from '../appLogic/upload'

const express = require('express');
const router = express.Router();

router.use(require('../middlewares/uploadMiddleware'))
router.use(require('./auth'));

router.options('/', (req: Request, res: Response) => {
    res.header('Application-Type', 'multipart/form-data');
    res.send();
    
})

router.post('/', function (req: any, res: any) {

    uploadImg(req, res);
    res.status(302);
    res.redirect('/gallery' + '?page=' + req.fields.pageNumInForm);
 });

module.exports = router;