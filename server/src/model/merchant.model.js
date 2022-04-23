import mongoose from "mongoose"
import { FITNESS_GOAL } from "./customer.model.js"
import { UserGender } from "./user.model.js"

const MerchantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    gender: {
        type: Number,
        enum: [UserGender.MALE, UserGender.FEMALE],
        required: true
    },
    CV: String,
    advantages: [
        {
            type: Number,
            enum: [FITNESS_GOAL.GAIN_WEIGHT, FITNESS_GOAL.LOSE_WEIGHT, FITNESS_GOAL.MAINTAIN]
        }
    ],
    addressWork: {
        detail: String,
        wardCode: Number,
        districtCode: Number,
        provinceCode: Number
    }
})

const Merchant = mongoose.model('Merchant', MerchantSchema)
export default Merchant