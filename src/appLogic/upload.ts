const fs = require('fs')
import { folders } from '../appLogic/gallery.js'
const express = require('express');
const app = express()



export function uploadImg(req: any, res: any){
    if (req.files.photo.size != '0') {
        fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), folders[req.fields.pageNumInForm], req.files.photo.name), () => { });
    } else {
        fs.unlink(req.files.photo.path, () => { });
    }
}