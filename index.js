import express from "express"
import 'dotenv/config'
import connectDB from "./database/client.js"
import authRouter from "./routes/authRouter.js"


const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8000

app.get('/',(req, res)=>{
   res.send('Welcome to my event api')
})
app.use('/api',authRouter)
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
