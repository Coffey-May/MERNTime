import mongoose from 'mongoose';

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
    creationDate: Date,
    default: new Date()
})

postContent = mongoose.model('PostContent', postSchema)