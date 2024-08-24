//ejs used for server side rendering
const path=require("path")
const express= require('express')
const mongoose= require("mongoose")

const app = express()
const PORT= 8000;

mongoose.connect('mongodb://localhost:27017/blogvibes').then( (e)=> console.log("MongoDB Connected "))
const userRoute = require('./routes/user')
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended: false})) //use when we need to handle form data
app.get('/',(req,res)=>{
    res.render("home") 
})

app.use('/user', userRoute)
app.listen(PORT, ()=>console.log(`Server running on PORT: ${PORT}`))