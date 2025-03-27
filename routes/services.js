import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import { createServices, getAllServices } from "../controller/servicesController.js";

const serviceRouter = Router()

serviceRouter.get('/service', getAllServices)
serviceRouter.post('/service', verifyUser, createServices)

export default serviceRouter