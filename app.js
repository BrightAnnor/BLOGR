const express = require('express');
const dotenv = require('dotenv');

//configure dotenv
dotenv.config();

//server port
const port = process.env.PORT || 5050;

//server
const app = express();

// middleWares



//server listen
app.listen(port,()=>{
    console.log( `server runing on http://localhost:${port}`);
})

