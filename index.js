require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');

const app = express() 
const PORT = 3000 
const api_routes = require("./routes/routes")
const MONGO_URL = "mongodb+srv://devkiranchauhan:lcABBpmjxGDhyTRA@cluster0.bngx23s.mongodb.net/?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('charset', 'utf-8')
    res.setHeader("Accept", "application/json")
    res.setHeader("Access-Control_Allow_Origin", "*")
    next();
});

app.use(express.json())
app.use("/",api_routes)

mongoose.connect(MONGO_URL)
let connection = mongoose.connection


connection.once("open",()=>{ 
    console.log("MongoDB connected......")
})

connection.on("error",(error)=>{
    console.error(error)
    process.exit()
})

const start = async() =>{
    try {
        app.listen(PORT,()=>{
            `API running on ${PORT}`
        })
    } catch (error) {
        console.error(error)
    }
}


start()