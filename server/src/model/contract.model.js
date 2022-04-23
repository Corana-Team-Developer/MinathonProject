import mongoose from "mongoose";
import { UserType } from "./user.model.js";

export const STATUS = {
    DRAFT: 0,
    PENDING: 1,
    EFFECTIVE: 2,
    CANCLE: 3,
    COMPLETED: 4
}

const contractSchema = mongoose.Schema({
    status: {
        type: Number,
        enum: [STATUS.DRAFT, STATUS.PENDING, STATUS.EFFECTIVE, STATUS.CANCLE, STATUS.COMPLETED],
        default: STATUS.DRAFT
    },
    dateStart: { type: Date, require: true },
    dateEnd: { type: Date, require: true },
    price: { type: Number, require: true},
    note: { type: String },
    createBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    receiveBy: { type: mongoose.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

const Contract = mongoose.model('Contract', contractSchema)
export default Contract