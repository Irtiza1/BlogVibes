const {Router} = require("express")
const router=Router()
const multer = require("multer")
const path = require('path')
const Blog = require("../models/blog")
const Comment = require("../models/comments")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads`))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName)
    }   
  })
  
const upload = multer({ storage: storage })




router.get('/add-new', (req, res)=>{
    return res.render('addBlog', {
        user: req.user,
    })
});
// Route to fetch a blog post with comments
router.get("/:id", async (req, res) => {
  try {
      const blog = await Blog.findById(req.params.id).populate("createdBy");
      const comments = await Comment.find({ blogId: req.params.id }).populate("createdBy");

      return res.render("blog", {
          user: req.user,
          blog,
          comments,
      });
  } catch (error) {
      console.error("Error fetching blog or comments:", error);
      res.status(500).send("Internal Server Error");
  }
});


// Route to handle comment creation
router.post("/comment/:blogId", async (req, res) => {
  try {
      if (!req.user) {
          return res.status(401).send("You must be logged in to comment.");
      }

      const newComment = new Comment({
          content: req.body.content,
          blogId: req.params.blogId,
          createdBy: req.user._id, 
      });

      await newComment.save();
      res.redirect(`/blog/${req.params.blogId}`);
  } catch (error) {
      console.error("Error creating comment:", error);
      res.status(500).send("Internal Server Error");
  }
});

router.post('/', upload.single("coverImage"), async (req, res)=>{
    const {title, body} =req.body
    console.log(req.body)
    console.log(req.file)

    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`
    })
    res.redirect(`/blog/${blog._id}`)
})
module.exports= router 