import userModel from "../models/userModel.js"


const addCartProduct = async(req,res)=>{
    try{
        const {userId,itemId,size} = req.body
    const userData = await userModel.findById(userId)
    const cartData = userData.cartData

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] +=1
        }
        else{
            cartData[itemId][size] =1
        }
    }else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }
    await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"added product into cart",cartData})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const updateCartProduct = async(req,res)=>{
    try{
        const {userId,itemId,size,qty} = req.body
    const userData = await userModel.findById(userId)
    const cartData = userData.cartData
    cartData[itemId][size] = qty

    await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"cart updated",cartData})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const getCartProduct = async(req,res)=>{
    try{
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        const cartData = userData.cartData

        res.json({success:true,cartData})


    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {addCartProduct,updateCartProduct,getCartProduct}
