//Express setup
const express = require("express");
const app = express();
//Dotenv setup
const dotenv = require("dotenv").config();
const port = process.env.PORT;
//middleware for sending data
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//database
const dbconnect = require("./database/db")
dbconnect();

//User Routing
app.use("/user", require("./routes/userRoutes"))

app.listen(port || 5000, (req,res) =>{
    console.log(`listening on port ${port}`);
})

