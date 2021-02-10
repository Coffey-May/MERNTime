import mongoose from 'mongoose';

//MODEL COMPONENT

const postSchema = mongoose.Schema({
    title: String,
    postBody: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: new Date()
    }
})

const postContent = mongoose.model('PostContent', postSchema)
export default postContent