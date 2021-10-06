import { Token, UsersDB } from '../interfaces'

export const token: Token = {
    'token': 'token',
}

export const users: UsersDB = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
}

export function isValidUser(req: any){
    if (req.body!.email in users && req.body!.password === users[req.body!.email]){
        return true; 
    }
}

export function sendToken(){

        return JSON.stringify(token)
    
}