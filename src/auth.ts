import {Request, Response} from "express";
import { runInNewContext } from "vm";

function authorizationMiddleware(req: Request, res: Response, next: Function) {
    console.log("COOKIES: ", req.cookies.token)
    if(req.cookies.token !== 'token') {
        res.status(401).send('Unauthorized');
        return;
    }
    else next();
}

module.exports = authorizationMiddleware;