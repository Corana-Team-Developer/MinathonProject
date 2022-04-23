import mongoose from "mongoose"
const { Schema } = mongoose

const PlanSuggestSchema = new Schema (
    {
        BMI: {
            start: { type: Number, required: true },
            end: { type: Number, required: true}
        },
        workoutPlan: [
            {
                day: { type: Number, required: true },
                exercises: {
                    exercise: {type: mongoose.Types.ObjectId, ref: 'Exercise'},
                    set: {type: Number, required: true},
                    rep: { type: Number, required: true }
                }
            }
        ]
    }
)

const PlanSuggest = mongoose.model('PlanSuggest', PlanSuggestSchema)
export default PlanSuggest;