const mongoose = require("mongoose");

const company = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    url:{
        type:String,
        trim:true,
        required:true
    }
});

const Company = mongoose.model("Company",company);

module.exports = Company;