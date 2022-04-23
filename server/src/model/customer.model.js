import mongoose from "mongoose"

export const FITNESS_GOAL = {
    GAIN_WEIGHT: 0,
    LOSE_WEIGHT: 1,
    MAINTAIN: 2
}

export const FITNESS_ACTIVE = {
    NOT_VERY: 0,
    LIGHT: 1,
    MEDIUM: 3,
    ACTIVE: 4,
    VERY_ACTIVE: 5,
}

const CustomerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    weight: Number, // kg
    height: Number, // cm
    goal: {
        type: Number,
        enum: [FITNESS_GOAL.GAIN_WEIGHT, FITNESS_GOAL.LOSE_WEIGHT, FITNESS_GOAL.MAINTAIN]
    },
    timeCanWorkout: [
        {
            day: {
                type: Number,
                enum: [0, 1, 2, 3, 4, 5, 6]
            },
            timeStart: String,
            endStart: String,
        }
    ],
    addressWorkout: {
        detail: String,
        code: Number
    },
    active: {
        type: Number,
        enum: [
            FITNESS_ACTIVE.NOT_VERY,
            FITNESS_ACTIVE.LIGHT,
            FITNESS_ACTIVE.MEDIUM,
            FITNESS_ACTIVE.ACTIVE,
            FITNESS_ACTIVE.VERY_ACTIVE
        ]
    }
})

const Customer = mongoose.model('Customer', CustomerSchema)
export default Customer