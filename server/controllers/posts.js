const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        console.log(postMessage)
        res.status(200).json(postMessage)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const createPosts = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(20).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = {getPosts, createPosts}