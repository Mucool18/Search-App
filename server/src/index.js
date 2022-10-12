const express = require("express")
const bodyParser = require('body-parser');
const companyRouter = require('./routes/company');
const adsRouter = require('./routes/ads');
require('./db/mongoose')
const app = express();


const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,Authorization,XMLHttpRequest,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
})

app.use(companyRouter);
app.use(adsRouter);

app.listen(PORT, ()=>{
    console.log("Connect at port",PORT)
})

