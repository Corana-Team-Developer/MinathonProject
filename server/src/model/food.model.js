import mongoose from "mongoose"

const FoodSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    Fat: Number,
    Protein: Number,
    Carb: Number,
    Serving: {
        type: Number,
        default: 100
    }
})

const Food = mongoose.model('Food', FoodSchema)
export default Food