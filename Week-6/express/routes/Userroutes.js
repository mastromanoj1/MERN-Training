const express  = require('express');
const router = express.Router()
const data = require('../data')
const { v4: uuidv4 } = require('uuid');

router.get('/',(req,res)=>{
    res.json(data)
})

router.get('/read/:id',(req,res)=>{
    const {id} = req.params;
    const filterdata = data.filter((x)=> x.id == id);
    if(filterdata.length)
        res.json(filterdata)
    else{
        res.status(404).json({msg : "No data found with the id ", id} )
    }
})

router.post('/create',(req,res)=>{
    console.log(req.body)
    res.json({...req.body,id : uuidv4()})
})

module.exports = router;