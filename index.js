//ejs used for server side rendering
const path=require("path")
const express= require('express')
const mongoose= require("mongoose")
const Blog = require('./models/blog')
const cookieParser = require('cookie-parser')
const app = express()
const PORT= 8000;

mongoose.connect('mongodb://localhost:27017/blogvibes').then( (e)=> console.log("MongoDB Connected "))
const userRoute = require('./routes/user')
const addBlog=  require('./routes/blog')
const checkForAuthenticationCookie = require("./middlewares/authentication")
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended: false})) //use when we need to handle form data
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve("./public")))
const session = require('express-session');

app.get('/',async (req,res)=>{
    const allBlogs= await Blog.find({}) 
    res.render("home",{
        user: req.user,
        blogs: allBlogs,
    }) 
})

app.use('/user', userRoute)
app.use('/blog', addBlog)
app.listen(PORT, ()=>console.log(`Server running on PORT: ${PORT}`))