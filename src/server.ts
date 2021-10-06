import { Request, Response } from "express"
import * as express from 'express'
const app = express()
import * as formidableMiddleware from 'express-formidable'
import * as path from 'path'
import * as fs from 'fs'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'

import logger from "./logger"
// const logger = require('./logger');
app.use(cors({
  origin: '*'
}))

app.use(express.json(), logger);

app.set("view engine", "ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/upload', formidableMiddleware({
    keepExtensions: true,
    uploadDir: path.resolve("../static/photos/uploads")
}));

app.use(express.static(path.join(__dirname, '../static/pages')))
app.use(express.static(path.join(__dirname, '../static/photos/first_page')))
app.use(express.static(path.join(__dirname, '../static/photos/second_page')))
app.use(express.static(path.join(__dirname, '../static/photos/third_page')))
app.use(express.static(path.join(__dirname, '../static/photos/fourth_page')))
app.use(express.static(path.join(__dirname, '../static/photos/fifth_page')))

const destination = path.join('../static/photos/uploads');
app.use(express.static(destination))
app.use('/static/photos/uploads',express.static('../static/photos/uploads'))


app.use(cookieParser())

import loginRouter from './routes/loginRouter'
import galleryRouter from './routes/galleryRouter'
import uploadRouter from './routes/uploadRouter'

// const loginRouter = require('./loginRouter.js')
// const galleryRouter = require('./galleryRouter.js')
// const uploadRouter = require('./uploadRouter.js')

app.use('/', loginRouter)
app.use('/gallery', galleryRouter)
app.use('/upload', uploadRouter)

app.all('*', (req: Request, res: Response) => {
  res.status(404).end(`Page ${req.url} not found`);
    
  });

app.listen(8080, () => console.log('At 8080 port...'))
