import mongoose from "mongoose"

const FoodSchema = new mongoose.Schema({
    id: String,
    name: String,
    calories: Number,
    fat: Number,
    protein: Number,
    carbohydrat: Number,
    serving: {
        type: Number,
        default: 100,
        required: true
    }
})

const Food = mongoose.model('foods', FoodSchema)
export default Food