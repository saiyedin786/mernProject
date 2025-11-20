const dbcon = require('./database.js')
const dotenv = require('dotenv')
const router = require('./routes/user.route.js')
const cors = require('cors')

dotenv.config()
const express = require('express')

const app = express()
app.use(express.json());  
app.use(cors({
          origin: '*', 
        }));

    app.use(router)


app.listen(process.env.PORT,()=>{
    dbcon()
    console.log(`server started on ${process.env.PORT} successfully`)
})
