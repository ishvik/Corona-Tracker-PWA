const express = require("express");
const cors = require('cors');
const cron = require('node-cron');
const getCoronaData = require('./script');

let basicData = require("./basicCoronaData.json");
let stateData = require("./stateData.json");

cron.schedule("*/10 * * * *", function() {
    console.log("running");
    getCoronaData();
});

const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000",
    credentials:true,
};

const coronaData = express.Router();
coronaData
.get("/basicdata",function(req,res){
    res.json(basicData);
})
.get("/statedata",function(req,res){
    res.send(stateData);
})

app.use("/api",coronaData);

app.listen(8081,function(){
    console.log("server started");
})