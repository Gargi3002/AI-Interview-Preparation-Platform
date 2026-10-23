import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
dotenv.config()
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"


const app=express()
app.use(cors({
    origin:"https://ai-interview-preparation-platform-1-lzmx.onrender.com" ,//request is allowed from this url
    credentials:true
}))
//establishinng connection between client and

app.use(express.json()) 
app.use(cookieParser())
//to create api
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview",interviewRouter)

const PORT = process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
