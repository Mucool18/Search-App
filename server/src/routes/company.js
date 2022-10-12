const express = require('express');
const router = new express.Router();
const Company = require('../modals/company');
const Ads = require('../modals/ads');

router.get('/company', async(req,res)=>{
    try{
        const allCompanies = await Company.find({});
        res.send({statusCode:"ok",data:allCompanies});
    }catch(err){
        res.send({statusCode:"Error", data:"Unable to fetch Companies"})
    }
    
})

module.exports = router;