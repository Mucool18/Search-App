const mongoose = require('mongoose');
const path = require('path');

mongoose.connect("mongodb://127.0.0.1:27017/testDb",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connected to db")
});