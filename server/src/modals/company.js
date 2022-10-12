const mongoose = require("mongoose");

const company = new mongoose.Schema({
    companyId:{
        type:Number,
        required:true
    },
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