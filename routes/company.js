const express = require('express')
const router = express.Router();


router.get('/',(req,res,next)=> {
    res.json({data:[
        {
            id: 1,
            name: 'TNI',
            address: {
                province: 'Bangkok',
                postcode: 10001
            }
        },
        {
            id: 2,
            name: 'TNI2',
            address: {
                province: 'Bangkok',
                postcode: 10002
            }
        },
        {
            id: 3,
            name: 'TNI',
            address: {
                province: 'Bangkok',
                postcode: 10003
            }
        },
    ]})
})


module.exports = router;