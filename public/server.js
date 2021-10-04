"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var loginRouter = require('./loginRouter.js');
var galleryRouter = require('./galleryRouter.js');
var uploadRouter = require('./uploadRouter.js');
var loginApi = require('./loginApi');
app.use('/', loginRouter);
app.use('/gallery', galleryRouter);
app.use('/upload', uploadRouter);
app.use('/api-login', loginApi);
app.all('*', function (req, res) {
    res.writeHead(404);
    res.end('Not Found');
    res.send("Page " + req.url + " not found");
});
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
// app.get(`/gallery`, async (req: Request, res: Response) => {
//     console.log(req.originalUrl)
//     let pageNumber = req.query.page;
//     if (pageNumber == null) {
//         pageNumber = "1";
//     }
//     let objects = await sendGalleryObject(pageNumber);
//     console.log("Objects: " + JSON.stringify(objects))
//     let ejsData = { }
//     console.log("!!!!")
//     let files = fs.readdir(destination, (err: any, files: any) => {
//         if(files.length <= 0){
//             ejsData = { objects }
//             res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData })
//         } else {
//             console.log('NOT EMPRTY')
//             console.log(files)
//             let photo = files;
//             console.log(photo)
//             ejsData = {objects, photo}
//             res.render((path.join(__dirname, '../static/pages/gallery.ejs')), { ejsData })
//         }
//     })
// })
// app.post('/upload', async (req: any, res: any) => {
//     console.log(JSON.stringify(req.files.photo));
//     console.log(req.fields);
//     fs.rename(req.files.photo.path, path.join(path.resolve("../static/photos"), folders[req.fields.pageNumInForm], req.files.photo.name), () => { });
//     res.redirect('/gallery');
// })
app.listen(8080, function () { return console.log('At 8080 port...'); });
