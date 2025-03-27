import express from "express"
import 'dotenv/config'
import connectDB from "./database/client.js"
import authRouter from "./routes/authRouter.js"
import eventRouter from "./routes/events.js"
import serviceRouter from "./routes/services.js"
import cors from "cors"
import { verifyUser } from "./middleware/verifyUser.js"
import profileRouter from "./routes/profiles.js"



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const PORT = process.env.PORT || 8000

app.get('/',verifyUser,(req, res)=>{
   res.send('Welcome to my event api')
})
app.use('/api',authRouter)
app.use('/api',eventRouter)
app.use('/api',serviceRouter)
app.use('/api',profileRouter)
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
