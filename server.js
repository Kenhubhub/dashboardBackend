//Express setup
const express = require("express");
const request = require("request")
const fs = require("fs")
// const csvPath = "i1.csv";
// const csv=require('csvtojson')
const sportsData = require("./sports")

const puppeteer = require("puppeteer")
const Axios = require("axios")
const app = express();
//Dotenv setup
const dotenv = require("dotenv").config();
const port = process.env.PORT;
//middleware for sending data
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}))
//database
const dbconnect = require("./database/db")
dbconnect();
//cors
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:3000",
}))
//User Routing
app.use("/user", require("./routes/userRoutes"))
//Task Routing
app.use("/tasks", require("./routes/taskRoutes"))
//image routing
app.use("/images",require("./routes/imageRoutes"))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.get('/news', (req, res) => {
    request(
      { url: 'http://feeds.bbci.co.uk/news/rss.xml' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message:
        err.message })
      }
      
      res.set('Content-Type', 'application/rss+xml')
      res.send(Buffer.from(body))
    })
})
app.post('/news', async (req, res) => {
//     console.log(req.body.url);
//    Axios.get(req.body.url).then( data =>{
//         res.send(data.data);
//    })
    const browser = await puppeteer.launch(
      { args: ['--no-sandbox'] }
                );
    const page = await browser.newPage();
    await page.goto(
        req.body.url
  );
  const issueSrcs = await page.evaluate(() => {
    const srcs = Array.from(
      document.querySelectorAll("img")
    ).map((image) => image.getAttribute("src"));
    return srcs;
  });
  const para = await page.evaluate(() => {
    const srcs = Array.from(
      document.querySelectorAll("p")
    ).slice(5,10).map((p) => p.innerText);
    return srcs;
  });
  await browser.close();
  res.json({images:issueSrcs, para})

})
app.get("/sports", (req,res)=>{
  res.json(sportsData)
})
//     csv()
// .fromFile(csvPath)
// .then((jsonObj)=>{
//     res.json(jsonObj);
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */ 
// })
// })
app.get("/clothes", async(req,res)=>{
    const data = await Axios.get("https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil");
    
    res.json(data.data.payload)
})

app.listen(port || 5000, (req,res) =>{
    console.log(`listening on port ${port}`);
})

