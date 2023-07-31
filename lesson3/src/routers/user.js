import { Router } from 'express'
import { signup, signin } from '../controllers/user'

const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)

export default userRouter