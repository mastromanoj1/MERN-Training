import data from "../data.js"
import { v4 as uuidv4 } from 'uuid';

import ProductDB from '../models/sampleData.js'

export const getAllUser = (req,res)=>{
    res.json(data)
}

export const getOneUser = (req,res)=>{
    const {id} = req.params;
    const filterdata = data.filter((x)=> x.id == id);
    if(filterdata.length)
        res.json(filterdata)
    else{
        res.status(404).json({msg : "No data found with the id ", id} )
    }
}

export const postCreateUser = async (req,res)=>{
    console.log(req.body)
    await ProductDB.create(req.body)
    .then((response) => {
        res.json(response)
    })
    .catch((err) => {
        res.status(404).send(err.message)
    })
    
    // res.json({...req.body,id : uuidv4()})
}