import postContent from '../Models/postModel.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postContent.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {

    const post = req.body
    const newPost = new postContent(post)

    try {
        await newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}