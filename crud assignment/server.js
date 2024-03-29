const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route");
require("dotenv").config()

const app=express();

app.use(cors());
app.use(express.json()) 

app.use("/",userRoute) 

app.listen(process.env.PORT,async()=>{
    await connectToDatabase()
    console.log("Server Started on PORT NO:",process.env.PORT)
})