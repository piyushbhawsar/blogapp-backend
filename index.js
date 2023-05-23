require("dotenv").config()
const express = require("express")
const {dbConnect} = require("./config/dbConnect")
const router = require("./routes/blogs")

const app = express() 

app.use(express.json())

app.use("/api/v1" , router)

const PORT = process.env.PORT
app.listen(PORT, console.log(`server started at ${PORT}`))

dbConnect()

app.get("/" , (req,res)=>res.send("<h1>This is HomePage Baby</h1>"))