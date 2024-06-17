const express = require('express');
const app = express();
const dotenv  = require('dotenv');  
const path    = require('path');
const movieRouter = require('./routes/movieRoute');
const connectDb = require('./config/db');
dotenv.config({path: path.join(__dirname,'config','config.env')});


app.use(express.json());

connectDb();

app.get("/",(req,res) => {
    res.json({
        message : "Home Page!"
    });
});

app.use("/movies",movieRouter);

app.listen(process.env.PORT,() => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})