const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue',(req,res,next)=>{
    api.getValue(req,res,next);
})

module.exports = router;