import express from 'express'

const route = express.Router()

route.post('/login',loginController);
route.post('/signup',signupController);

export default route
