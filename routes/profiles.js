import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import { getUserProfile } from "../controller/profileController.js";



const profileRouter= Router()
const JWT_SECRET= process.env.JWT_SECRET

profileRouter.get('/profile', verifyUser, getUserProfile)

export default profileRouter