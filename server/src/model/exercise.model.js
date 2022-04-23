import mongoose from "mongoose"

export const MUSCLE = [
    'abdominals', 'hamstrings',
    'adductors',  'quadriceps',
    'biceps',     'shoulders',
    'chest',      'middle back',
    'calves',     'glutes',
    'lower back', 'lats',
    'triceps',    'traps',
    'forearms',   'neck',
    'abductors'
]

export const LEVEL = [ 'beginner', 'intermediate', 'expert' ]

const ExerciseSchema = mongoose.Schema({
    name: String,
    image: String,
    level: {
        type: String,
        enum: LEVEL
    },
    primaryMuscles: [
        {
            type: String,
            enum: MUSCLE
        }
    ],
    instructions: [String]
}, {
    timestamps: true
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)
export default Exercise