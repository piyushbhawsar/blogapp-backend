const Post = require("../models/postModel")

exports.createPost = async(req,res) => {
    try{
        const {title,body} = req.body
        const comment = new Post ({title,body})
        const savedPost = await comment.save()
        res.json({
            message: "Post Created Successfully",
            post: savedPost
        })
    }
    catch(e) {
        return res.status(400).json({
            error: "Error While Creating Post nu"
        })
    }
}

exports.getAllPosts = async(req,res) => {
    try{
        const posts = await Post.find({}).populate("comments").exec()
                            
        res.json({
            post:posts
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error While Fetcching All Post nu"
        })
    }
}