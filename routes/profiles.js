import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import { getAllUsers, getUserById, getUserProfile } from "../controller/profileController.js";



const profileRouter= Router()
const JWT_SECRET= process.env.JWT_SECRET

profileRouter.get('/profile', verifyUser, getUserProfile)

profileRouter.get('/users', getAllUsers)

profileRouter.get('/users/:id', getUserById)

export default profileRouter