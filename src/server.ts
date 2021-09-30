import { UsersDB, Token, ErrorMessage } from "./interfaces"
import {Request, Response} from "express"
import { runInNewContext } from "vm";
import { sendGalleryObject } from "./gallery";
const express = require('express')
const path = require('path')
const fs = require('fs');
const app = express()
const bodyParser = require('body-parser');
const multer = require('multer')


interface MulterRequest extends Request {
    file: any;
}


const token: Token = {
    'token': 'token',
}

const users: UsersDB = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
}

app.set("view engine", "ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../static/pages')))
app.use(express.static(path.join(__dirname, '../static/photos/first_page')))
app.use(express.static(path.join(__dirname, '../static/photos/second_page')))
app.use(express.static(path.join(__dirname, '../static/photos/third_page')))
app.use(express.static(path.join(__dirname, '../static/photos/fourth_page')))
app.use(express.static(path.join(__dirname, '../static/photos/fifth_page')))
console.log("Static path: " + path.join(__dirname, '../static/photos/fifth_page'))

// let page: string;

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../static/pages/index.html'))
})

app.post('/', (req: Request, res: Response) => {
    // if(req.body.page){
    //     page = req.body.page
    // }
    // console.log("Page: " + page)
    console.log("Body: " + JSON.stringify(req.body))
    if (req.body.email in users && req.body.password === users[req.body.email]){
        console.log("Email: " + req.body.email)
        console.log("Password: " + req.body.password)
        res.header( {'Access-Control-Allow-Origin': '*'} );
        res.status(200);
        res.send(JSON.stringify(token))
    } else {
        console.log('Not found')
    }
})

// app.get('/gallery', (req: Request, res: Response) => {
//     res.redirect(`/gallery?page=${page}`)
// })

app.get(`/gallery`, async (req: Request, res: Response) => {
    console.log(req.originalUrl)
    let pageNumber = req.query.page;
    if (pageNumber == null) {
        pageNumber = "1";
    }
    // console.log(req.query.page)
    
    // console.log(req.originalUrl)
    
    //     console.log('gallery')
    //     res.sendFile(path.join(__dirname, '../static/pages/gallery.html'))
    let objects = await sendGalleryObject(pageNumber);
    console.log("Objects: " + JSON.stringify(objects))
    // res.render((path.join(__dirname, '../static/pages/gallery.ejs')), {gallery: objects})
    

    res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { objects })

})


// upload photos

const destination = path.join(__dirname, '../static/photos/uploads');
app.use(express.static(destination))

console.log(destination)


const fileStorage = multer.diskStorage({
    destination: destination,
    filename: (req: MulterRequest, file: any, cb: any) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg');
}
})


// Create multer object
// const imageUpload = multer({
//     dest: destination,
    
// });

const upload = multer({storage: fileStorage}).single('file')

app.post('/gallery', upload, (req: MulterRequest, res: Response) => {
    console.log(req.file.originalname)
    // res.render(path.join(__dirname, '../static/pages/gallery.ejs'), { file: req.file })
    // res.sendFile(path.join(destination, req.file))
})




app.listen(8080, () => console.log('At 8080 port...'))

