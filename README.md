# module2_part3_express_server

## Vlasta Stelmakh

### About this project:

#### This project was developed for educational purpose. 
It consists of client and server sides. Server side, which is the main focus of the project, was written with Node.js, Express and Typescript. EJS was used for client side
User attempts to log in, if his data is correct, the server sends him object, containing object with:

* total number of pages
* current page number
* array with photos links

Also user can upload images to any page he wants. Photos are placed to pages accordingly. 

### Tools used for the project

* Node.js
* Express
* Typescript
* EJS
* Cookie parser
* Express-formidable
* Simple-node-logger

### Project structure:

* /logs
  * logger.log
* /public
* /src
  * auth.ts
  * gallery.ts
  * galleryRouter.ts
  * interfaces.ts
  * logger.ts
  * loginRouter.ts
  * server.ts
  * uploadRouter.ts
* /static
  * /pages
    * gallery.ejs
    * gallery.js
    * index.html
    * login.js
    * not_found.html
  * /photos
    * /first_page
    * /second_page
    * /third_page
    * /fourth_page
    * /fifth_page
* express_gallery.postman_collection.json
* gallery_express-1.0.0-swagger.yaml