import express from 'express'
import userAuth from '../middleware/auth.js'
import {addCartProduct,updateCartProduct,getCartProduct} from '../controllers/cartController.js'

const cartRoute = express.Router()

cartRoute.post('/add',userAuth, addCartProduct)
cartRoute.post('/update',userAuth, updateCartProduct)
cartRoute.post('/get',userAuth, getCartProduct)

export default cartRoute
