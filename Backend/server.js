import 'dotenv/config'
import express from 'express'
import cors from'cors'
console.log("Mongo URI:", process.env.MONGODB_URI);
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRoutes from './routes/userRoute.js'
import productRoutes from './routes/productRoute.js'
import cartRoute from './routes/cartRoutes.js'
import orderRoute from './routes/orderRoutes.js'
const app = express()
const port = process.env.PORT || 4000

 app.use(express.json())
 app.use(cors())
 connectDB()
 connectCloudinary()

 app.use('/api/user',userRoutes)
 app.use('/api/product',productRoutes)
 app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)

 app.get('/',(req,res)=>{
    res.send('API Working')
 })
 app.listen(port,()=> console.log('server started on PORT:' + port))