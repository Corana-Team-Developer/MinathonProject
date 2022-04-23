import mongoose from "mongoose"

export const MealType = {
    BREAKFAST: 0,
    LUNCH: 1,
    SNACKS: 2,
    DINNER: 3
}

const FoodTrackingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        foods: [
            {
                food: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'foods'
                },
                quantity: Number,
                mealType: {
                    type: Number,
                    enum: [
                        MealType.BREAKFAST,
                        MealType.LUNCH,
                        MealType.SNACKS,
                        MealType.DINNER
                    ]
                }
            }
        ],
        createdAt: Date
    }
)

const FoodTracking = mongoose.model('FoodTracking', FoodTrackingSchema)
export default FoodTracking