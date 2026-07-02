import jwt from 'jsonwebtoken'

const userAuth = async(req,res,next)=>{
    try{
        const {token} = req.headers

        if(!token){
            return res.json({success:false,message:"not authorize login again"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = decode.id
        next()
    }catch(error){
        console.log(error.message)

    }
}
export default userAuth