const dotenv=require("dotenv")
const express = require("express")
const app =express()
const mongoose=require("mongoose")
const PORT=process.env.PORT||3000
const cors=require('cors')
const cookieParser =require("cookie-parser")
dotenv.config()

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.listen(PORT,()=>{
    console.log('Server is running')
})

app.get("/",(req,res)=>{
    res.send("Hello Express")
})