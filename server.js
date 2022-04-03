import express from 'express';
import cors from 'cors'                                                 // import CORS
// const express = require('express');                                  // require equivalent to import keyword and loads the library into local source
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js"           // import userController
import tuitsController from "./controllers/tuits-controller.js"         // import tuitsController
const app = express();                                                  // express() function creates an instance of express library and assign it to app
// app.get('/hello', (req, res) => {res.send('Life is good here')})     // declares HTTP handler by mapping URL pattern '/hello' to a function that  handles HTTP request.
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development')})
app.use(express.json());                                                // parse JSON from HTTP request body
app.use(cors());                                                        // use cors as first middleware
helloController(app);
userController(app);                                                    // pass an app to userController
tuitsController(app);
app.listen(process.env.PORT || 4000);                               // uses PORT environment if available in Heroku or 4000