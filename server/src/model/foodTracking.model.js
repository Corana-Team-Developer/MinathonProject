import mongoose from "mongoose"

const foodTracking = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        breafast: [
            
        ]
    },
    { timestamps: true }
)