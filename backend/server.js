import express from 'express'
import dotenv from 'dotenv'
import route from './routes/authroute.js'
dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server is running on port ${PORT}`)
    }
    else{
        console.log(`Error occurred: ${err}`)
    }
})

