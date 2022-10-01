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
//cors
const cors = require("cors")
app.use(cors({
    origin: "https://heartfelt-pegasus-34387a.netlify.app",
}))
//User Routing
app.use("/user", require("./routes/userRoutes"))
//Task Routing
app.use("/tasks", require("./routes/taskRoutes"))
app.listen(port || 5000, (req,res) =>{
    console.log(`listening on port ${port}`);
})

