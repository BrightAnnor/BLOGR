const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute')

//configure dotenv
dotenv.config();

//server port
const port = process.env.PORT || 5050;

//server
const app = express();

// middleWares
app.use('/',userRoute);



//server listen
app.listen(port,()=>{
    console.log( `server runing on http://localhost:${port}`);
});

