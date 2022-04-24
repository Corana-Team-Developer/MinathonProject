import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title :{ type: String, required: true },
    content: { type: String, required: true },
    images: { type: String },
    admin: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema)
export default Blog