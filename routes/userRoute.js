const express = require('express');
const {home,blog,about,contact,addBlog} = require('../controllers/userController');


// server extension
const app = express.Router();

app.get('/',home)
app.get('/about',about)
app.get('/blog',blog);
app.get('/contact',contact);

app.post('/blog',addBlog)




//export route
module.exports = app;