import express from 'express'

const route = express.Router()

route.get('/',(req,res)=>{
    res.send('Auth Route')
})

export default route
