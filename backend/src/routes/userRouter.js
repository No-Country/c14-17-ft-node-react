const {Router} = require('express')
const { getUserByIdHandler, postUserHandler, loginHandler,forgotPasswordHandler ,resetPasswordHandler} = require('../handlers/userHandlers')

const userRouter = Router()

userRouter.get('/detail',getUserByIdHandler)
//AUTH
userRouter.post('/register', postUserHandler)
userRouter.post('/login', loginHandler)
userRouter.post('/forgot-password',forgotPasswordHandler)
userRouter.post('/reset-password',resetPasswordHandler)
module.exports = {userRouter}