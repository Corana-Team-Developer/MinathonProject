import mongoose from "mongoose"
const { Schema } = mongoose

const FeedbackSchema = new Schema (
    {
        customer:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        merchant:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        rating:{type: Number},
        review:{type: String}
    },
    {
        timestamps: true
    }
)

const Feedback = mongoose.model('Feedback', FeedbackSchema)
export default Feedback;