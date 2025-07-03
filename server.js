let express = require('express');
const app = express();
require('dotenv').config();

//import db
const db = require('./db');

//PORT
const PORT = process.env.PORT || 3000;
//import body parser and use
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import personRoutes
const personRoutes = require('./routes/personRoutes');
//import menuRoutes
const menuRoutes = require('./routes/menuRoutes');
// make routes
app.use('/person' ,personRoutes);
app.use('/menu' ,menuRoutes);


app.listen(PORT,()=> console.log("server on"))