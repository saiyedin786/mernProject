const mongoose = require('mongoose')

const dbcon = async ()=>{

        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("database connection successful")
        }).catch((err)=>{
            console.log("Database connection failed",err)
        })
    
}

module.exports = dbcon