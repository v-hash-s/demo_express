import { IncomingMessage } from "http"
import { basename, dirname } from "path/posix"
import { GalleryResponse, ErrorMessage  } from "./interfaces"
import * as util from 'util';

import * as fs from 'fs'
import * as path from 'path'
import * as querystring from 'querystring'

const readdir = util.promisify(fs.readdir);

export enum folders {
    first_page = 1,
    second_page,
    third_page,
    fourth_page,
    fifth_page,
}


let photos: Array<string> = [];


export async function sendGalleryObject(pageNumber: any): Promise<GalleryResponse | ErrorMessage>{

    photos = [];
    if (isNaN(Number(pageNumber)) || Number(pageNumber) > 5 || Number(pageNumber) < 1) {
        console.log("Wrong page number")
        return {
            errorMessage: "Invalid page number"
        };
    }
    let dir = path.join(__dirname, '../static/photos', folders[pageNumber])
    console.log("Dir: " + dir)
    let files = await readdir(dir)

    files.forEach((file: any) => {
        photos.push(file)
    });

    console.log("Photos: " + photos)

    let galleryResponse: GalleryResponse = {
        objects: photos,
        page: pageNumber.toString(),
        total: 5
    }

    console.log(galleryResponse)

    return galleryResponse;
}    