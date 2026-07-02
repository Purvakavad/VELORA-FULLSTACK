import express from "express"
import {userLogin,register,adminLogin} from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.post('/login',userLogin)
userRoutes.post('/register',register)
userRoutes.post('/admin',adminLogin)

export default userRoutes