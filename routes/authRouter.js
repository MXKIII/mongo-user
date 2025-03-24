import User from "../models/Users.js";
import { Router } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const authRouter= Router()
const JWT_SECRET= process.env.JWT_SECRET

authRouter.post('/register', async(req,res)=>{
    const{first_name, last_name, email, password} = req.body
    try {
        const emailVerification = await User.findOne({email})
        if(emailVerification){
            return res.status(409).json(`email already taken`)
        }
        const saltPassword = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, saltPassword)
        const newUser = await new User({
            first_name,
            last_name,
            email,
            password:hashedPassword
        })
        await newUser.save()
        return res.status(201).json(`welcome ${first_name}`)
    } catch (error) {
        console.log(error)
        return res.status(500).json(`internal server error`, error)
    }
})

authRouter.post('/login',async (req,res)=>{
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})    
        if(!user){
         return res.status(404).json(`email or password invalid`)
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(404).json(`email or password invalid`)
        }
        const token = await jwt.sign({id: user._id}, JWT_SECRET)
         return res.status(200).json(token)
    } catch (error) {
        console.log(error)
        return res.status(500).json(`internal server error`, error)
    }

})

export default authRouter