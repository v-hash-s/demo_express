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

### Project structure description:

#### express_gallery.postman_collection.json

> postman collection to test requests with Postman

#### gallery_express-1.0.0-swagger.yaml

> description of requests with swagger

#### **/logs**

> Logs info

#### logger.log

> Logs created with logger.ts

#### **/public**

> Compiled .ts to .js files

#### **/src**

> Typescript files

#### auth.ts

> Function that checks cookies if user has the token to use gallery

#### gallery.ts

> Function that returns object with page total number, current page and array of photos

#### galleryRouter.ts

> Router for **get** requests to */gallery* to get images

#### interfaces.ts

> Interfaces for other files

#### logger.ts

> Function to create logs to /logs/logger.log

#### loginRouter.ts

> Router for **get** and **post** requests to */* to authorize

#### server.ts

> Main router to direct user to specific pages according to his requests

#### uploadRouter.ts

> Router for **post** requests to */upload* to upload photo to server

#### **/static**

#### **/pages**

> Client side with .js scripts, html for login page and ejs for gallery page

#### **/photos**

> photos for each gallery page and upload folder to temporarily save uploaded by user photos

### How to start the project: 

1. Clone the repository to your machine
2. Open it in you code editor
3. In terminal run command "npm install" to install all essential npm modules
4. From the root of the project run command "npm run start" to run the server
5. Open your browser and enter in the search bar "localhost:8080"
6. Enjoy the photos of architecture and upload anything you want