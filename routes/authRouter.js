import { Router } from "express";
import { createUser, loginUser } from "../controller/authController.js";
import { upload } from "../middleware/uploadFiles.js";

const authRouter= Router()
const JWT_SECRET= process.env.JWT_SECRET

authRouter.post('/register',upload.single('image'),createUser)

authRouter.post('/login', loginUser)

export default authRouter