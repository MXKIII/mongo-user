import { Router } from "express";
import { verifyUser } from "../middleware/authMiddleWare";

const eventRouter = Router()

eventRouter.get('/event',verifyUser,async(req, res)=>{
    console.log(req.user)
    res.send('welcome to my events')
})

export default eventRouter