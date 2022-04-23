import mongoose from "mongoose"
import { UserGender } from "./user.model.js"

export const FITNESS_GOAL = {
    GAIN_WEIGHT: 0,
    LOSE_WEIGHT: 1,
    MAINTAIN: 2
}

export const FITNESS_ACTIVE = [
    {
        name: 'Not very active',
        description: 'Spend most of the day sitting (e.g. bank teller, desk job)',
        value: 0
    },
    {
        name: 'Light active',
        description: 'Spend a good part of the day on your feet (e.g. teacher, salesperson)',
        value: 1
    },
    {
        name: 'Medium active',
        description: 'Have a medium active daily.',
        value: 2
    },
    {
        name: 'Active',
        description: 'Spend a good part of the day doing some physical activity.',
        value: 3
    },
    {
        name: 'Very active',
        description: 'Spend most of the day doing heavy physical activity.',
        value: 4
    }
]

export const WEEKLY_GOAL = [
    {
        name: 'Lose 1kg per week',
        value: -1
    },
    {
        name: 'Lose 0.5kg per week',
        value: -0.5
    },
    {
        name: 'Maintain my current weight',
        value: 0
    },
    {
        name: 'Gain 0.5kg per week',
        value: 0.5
    },
    {
        name: 'Gain 1kg per week',
        value: 1
    }
]

const CustomerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    gender: {
        type: Number,
        enum: [UserGender.MALE, UserGender.FEMALE],
        // required: true
    },
    weight: Number, // kg
    height: Number, // cm
    goal: {
        startingWeight: {
            time: Date,
            value: Number
        },
        currentWeight: Number,
        goalWeight: Number,
        weeklyGoal: {
            name: String,
            value: Number
        },
        active: {
            name: String,
            description: String,
            value: Number
        }
    },
    progress: [
        {
            weight: Number,
            time: Date,
            _id: false
        }
    ],
    timeCanWorkout: [
        {
            day: {
                type: Number,
                enum: [0, 1, 2, 3, 4, 5, 6]
            },
            timeStart: String,
            endStart: String,
            _id: false
        }
    ],
    addressWorkout: {
        detail: String,
        wardCode: Number,
        districtCode: Number,
        provinceCode: Number
    }
})

const Customer = mongoose.model('Customer', CustomerSchema)
export default Customer