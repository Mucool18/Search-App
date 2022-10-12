const express = require('express');
const router =  new express.Router();
const Company = require('../modals/company');
const Ads = require('../modals/ads');

router.get('/ads/:key', async(req,res)=>{
    const key = req.params.key;
        try{
            const ads = await Ads.aggregate([{
                "$lookup":{
                    from: "company",
                    localField: "companyId",
                    foreignField: "id",
                    as: "company"
                },
            },
            {
                "$match":{
                    "$or":[
                        {
                            "company":{
                                $elemMatch:{
                                    "name": {$regex:key}
                                }
                            }
                        },
                        {
                            "primaryText":{$regex:key}
                        },
                        {
                            "description":{$regex:key}
                        },
                        {
                            "headline":{$regex:key}
                        },
                    ]
                }
            }])
            return res.send({statusCode:"ok",data:ads});
        }catch(err){
            res.send({statusCode:"Error",data:err})
        }
        
})
router.get('/allAds/', async(req,res)=>{
    const AllAds = await Ads.find({});
    return res.send(AllAds);
})

module.exports = router;