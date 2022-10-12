const mongoose = require("mongoose");

const ads = new mongoose.Schema({
    companyId:{
        type:Number,
        required:true
    },
    primaryText:{
        type: String,
        trim:true,
        required: true
    },
    headline:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    CTA:{
        type:String,
        trim:true,
        required:true
    },
    imageUrl:{
        type:String,
        trim:true,
        required:true
    }
})

const Ads = mongoose.model("Ads",ads);
module.exports = Ads;