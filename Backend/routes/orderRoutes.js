import express from 'express';
import userAuth from '../middleware/auth.js'
import {verifyRazorpay,placeOrderRezorpay,verifyPayment,getUserOrder,placeOrder,placeOrderStrip,getAllOrder,updateStatus} from '../controllers/oredreControllers.js'
import adminAuth from  '../middleware/adminAuth.js'

const orderRoute = express.Router()

orderRoute.post('/user-order',userAuth,getUserOrder)
orderRoute.post('/place-order',userAuth,placeOrder)
orderRoute.post('/stripe',userAuth,placeOrderStrip)
orderRoute.post('/verifyStripe',userAuth,verifyPayment)
orderRoute.post('/razorpay',userAuth,placeOrderRezorpay)
orderRoute.post('/verifyRazorpay',userAuth,verifyRazorpay)
//admin
orderRoute.post('/list',adminAuth,getAllOrder)
orderRoute.post('/status',adminAuth,updateStatus)

export default orderRoute