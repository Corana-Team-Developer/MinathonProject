import mongoose from "mongoose"
import bcrypt from "bcrypt"
import config from "../../config/default.js"

export const UserType = {
    CUSTOMER: 0,
    MERCHANT: 1,
    ADMIN: 2
}

export const UserGender = {
    MALE: 0,
    FEMALE: 1
}

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    bod: Date,
    avatar: String,
    gender: {
        type: Number,
        enum: [UserGender.MALE, UserGender.FEMALE],
        required: true
    },
    address: {
        detail: String,
        wardCode: Number,
        districtCode: Number,
        provinceCode: Number
    },
    userType: {
        type: Number,
        enum: [UserType.CUSTOMER, UserType.MERCHANT, UserType.ADMIN],
        required: true,
        default: UserType.CUSTOMER
    }
}, {
    timestamps: true
})

UserSchema.pre("save", async function(next) {
    let user = this

    if (!user.isModified) {
        return next()
    }
    const salt = await bcrypt.genSalt(config.saltRounds)
    const hash = await bcrypt.hash(user.password, salt)

    user.password = hash
    return next()
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const user = this

    return bcrypt.compare(candidatePassword, user.password).catch(error => false)
}

const User = mongoose.model('User', UserSchema)
export default User