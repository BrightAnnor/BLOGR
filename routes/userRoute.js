const express = require('express');
const {home,blog,about} = require('../controllers/userController');


// server extension
const app = express.Router();

app.get('/',home)




//export route
module.exports = app;