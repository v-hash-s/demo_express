import { UsersDB, Token, ErrorMessage } from "./interfaces"
const express = require('express');
import e, { Request, Response } from "express"
const router = express.Router();
const path = require('path')
const app = express()
const token: Token = {
    'token': 'token',
}

const users: UsersDB = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
}

app.use(express.static(path.join(__dirname, '../static/pages')))


router.get('/', function(req: Request, res: Response){
    res.sendFile(path.join(__dirname, '../static/pages/index.html'))
 });


 router.post('/', function(req: Request, res: Response){
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
 });

 module.exports = router;