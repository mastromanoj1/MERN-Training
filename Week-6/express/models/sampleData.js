import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true
    },
    title : {
        type : String,
    },
    price : {
        type:Number
    },
    description : {
        type : String
    },
    category : {
        type : String
    },
    image : {
        type : String
    },
    rating : [{
        rate : {
            type : Number
        },
        count : {
            type :  Number
        }
    }]
})

export default mongoose.model("Data",dataSchema)