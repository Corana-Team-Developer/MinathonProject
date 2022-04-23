import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: mongoose.Types.ObjectId, ref: 'Category'}
}, {
    timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)
export default Exercise