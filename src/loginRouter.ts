import { UsersDB, Token, ErrorMessage } from "./interfaces"
const express = require('express');
import e, { Request, Response } from "express"
const router = express.Router();
const path = require('path')
const app = express()
let cookieParser = require('cookie-parser')
app.use(cookieParser())

export const token: Token = {
    'token': 'token',
}

export const users: UsersDB = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
}

app.use(express.static(path.join(__dirname, '../static/pages')))

router.options('/', (req: Request, res: Response) => {
    
    res.header({'Access-Control-Allow-Origin': '*' });
    res.header({ 'Access-Control-Allow-Credentials': 'true' });
    res.header({ 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST' });
    res.header({ 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers' });
    res.header('Application-Type', 'multipart/form-data');
    
    res.send();
    
})

router.get('/', function(req: Request, res: Response){
    res.sendFile(path.join(__dirname, '../static/pages/index.html'))
 });


 router.post('/', function(req: Request, res: Response){
    if (req.body.email in users && req.body.password === users[req.body.email]){
        res.cookie('token', 'token')
        res.header("Authorization", 'token')
        res.header( {'Access-Control-Allow-Origin': '*'} );
        res.status(200);
        res.send(JSON.stringify(token))
    } else {
        res.status(401);
        res.send({ errorMessage: 'Invalid email or password'});
    }
 });

 module.exports = router;

