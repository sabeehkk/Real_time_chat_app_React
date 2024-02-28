import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup =async (req,res)=>{
   try {
    console.log(req.body);
    const {fullName,userName,password,gender,confirmPassword}=req.body
    if(password!==confirmPassword){
        return res.status(400).json({message:'password dont match'})
    }
    const user =await User.findOne({userName})
    if(user){
        return res.status(400).json({message:'username already exists'})
    }
    const salt = await bcrypt.genSalt(10)
    console.log(salt,'salted password');
    const hashedPassword = await bcrypt.hash(password,salt)

    const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${userName}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${userName}`
        const newUser = new User({
            fullName,
            userName, 
            password:hashedPassword,
            gender,
            profilePic:gender==='male'?boyProfilePic:girlProfilePic
        })
      if(newUser){
         generateTokenAndSetCookie(newUser._id,res)
        await newUser.save()
        res.status(200).json({_id:newUser._id,
        fullName:newUser.fullName,
        userName:newUser.userName,
        profilePic:newUser.profilePic})
      }else{
        res.status(400).json({error:"invalid userdata"})
      }
   } catch (error) {
    console.log(error.message,'eror signup');
    return res.status(500).json({error:'internal server error'})
   }
}
export const login =async(req,res)=>{
  try {
    console.log(req.body);
    const {userName,password}=req.body
    const user =await User.findOne({userName:userName})
    const isPasswordMath =await bcrypt.compare(password,user?.password ||"")
    if(!user ||!isPasswordMath){
      res.status(400).json({error:'username or password is incorrect'})
    }
    generateTokenAndSetCookie(user._id,res)
    res.status(200).json({_id:user._id,
    fullName:user.fullName,
    userName:user.userName,
    profilePic:user.profilePic
  });
    console.log(isPasswordMath,'sssssssss');
  } catch (error) {
    console.log(error.message,'errrrrrrrrrrrrr');
    res.status(500).json({error:'internal server error'})
  }
}

export const logout =(req,res)=>{
    console.log('logout');
    try {
      res.cookie("jwt-token","",{maxAge:0})
      res.status(200).json({message:'logout successful'})
    } catch (error) {
      console.log(error.message,'erologout');
      res.status(500).json({error:'internal server error'})
    }
} 
