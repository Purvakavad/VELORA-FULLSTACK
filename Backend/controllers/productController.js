import {v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'
const addProduct = async(req,res)=>{
    try{
        const {name,description,price,Category,subCategory,sizes,bestseller} = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0] 
        const image3 = req.files.image3 && req.files.image3[0] 
        const image4 = req.files.image4 && req.files.image4[0]
    
        const images = [image1,image2,image3,image4].filter((item)=>item!== undefined)
        let imageUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,description,
            price:Number(price),
            Category,
            subCategory,
            bestseller:bestseller === "true" ? true : false,
            sizes:JSON.parse(sizes),
            image:imageUrl,
            date:Date.now()

        }
        const newProduct = new productModel(productData)
        await newProduct.save()
        res.json({success:true,message:"product added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

const removeProduct = async(req,res)=>{
    const product = await productModel.findByIdAndDelete(req.body._id)
    res.json({success:true,message:"product remove"})
    
}
const singleProduct = async(req,res)=>{
    const product = await productModel.findById(req.body._id)
    res.json({success:true,product})
    
}
const listProduct = async(req,res)=>{
    try{
        const products = await productModel.find({})
        res.json({success:true,products})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}
export {addProduct,removeProduct,singleProduct,listProduct}