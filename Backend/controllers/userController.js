import userModel from '../models/userModel.js'
import validator from "validator"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

const createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
const userLogin =async(req,res)=>{
    try{
        const {email,password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.json({success:false,message:"user doesn't exists"})
    }

    const isMetch = await bcrypt.compare(password,user.password)

    if(isMetch){
        const token = createToken(user._id);
        res.json({success:true,token})
    }
    else{
        res.json({success:false,message:"invalid credentials"})
    }
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

const register = async(req,res)=>{
    try{
        
        const {name,email,password} = req.body 
        const exist = await userModel.findOne({email})

        if(exist){
            return res.json({success:false,message:"Email is alredy exist"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"plz enter valid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"please enter a strong password"})
            
        }
        const salt = await bcrypt.genSalt(10)
        const hasedPasssword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name,email,password:hasedPasssword
        })
        const user = await newUser.save()

        const token = createToken(user._id);
        res.json({success:true,token})

    }catch(error){
        console.log(error)
            return res.json({success:false,message:error.message})

    }
}

const adminLogin = async(req,res)=>{
    const {email,password} = req.body
    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.json({success:false,message:"doesn't authoraze user login again"})
    }else{
        const token = await jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({success:true,token})

    }
}

export {userLogin,register,adminLogin}