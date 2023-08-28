const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./database/dbConnect');

//configure dotenv
dotenv.config();

//server port
const port = process.env.PORT || 5050;

//server
const app = express();

//view
app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.urlencoded({extended: false}));


// middleWares
app.use('/',userRoute);
app.use(express.static('public'));



//server listeng



const startServer = async ()=>{
    try {
        await sequelize.authenticate()
        app.listen(port,()=>{
            console.log( `server runing on http://localhost:${port}`);
        });  
    } catch (error) {
        console.log(error)        
    }
};

startServer()
