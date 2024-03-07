import data from "../data.js"
import { v4 as uuidv4 } from 'uuid';


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

export const postCreateUser = (req,res)=>{
    console.log(req.body)
    res.json({...req.body,id : uuidv4()})
}