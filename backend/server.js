import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/dbConfig.js'
import cors from 'cors'
dotenv.config()
const app = express()


// const corsOptions = {    
//     origin: '*', // Allow all origins
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
//     allowedHeaders: 'Content-Type, Authorization', // Allowed headers
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// }

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//connecting to the database 
connectDB()

const PORT = process.env.PORT || 8000

app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server is running on port ${PORT}`)
    }
    else{
        console.log(`Error occurred: ${err}`)
    }
})

