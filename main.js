const express = require('express');

const app = express();
const dotenv  = require('dotenv');  
const path    = require('path');

dotenv.config({path: path.join(__dirname,'config','config.env')})

app.get("/",(req,res) => {
    res.json({
        message : "Home Page!"
    });
})

app.listen(process.env.PORT,() => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})