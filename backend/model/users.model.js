const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uname:{
        type:String
    },
    age:{
        type:Number
    },
    mobile:{
        type:Number
    },
    email:{
        type:String
    }
},{timestamps:true})

const user = mongoose.model("users",userSchema)

module.exports = user

