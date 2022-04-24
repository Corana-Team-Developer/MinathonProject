import { Router } from "express"
import authenticate from "../middleware/authenticate.js"
import { handleUploadMultiImage } from "../middleware/handleUploadImage.js"
import authRouter from "./auth.route.js"
import dataRouter from "./data.route.js"
import adminRouter from "./admin.route.js"
import contractRouter from "./contract.route.js"
import customerRouter from "./customer.route.js"
import Exercise from "../model/exercise.model.js"
import merchantRouter from "./merchant.route.js"
import Food from "../model/food.model.js"
import { sendErrorServerInterval, sendSucces } from "../helper/client.js"

const api = Router()

api.use('/contract', contractRouter)
api.use('/auth', authRouter)
api.use('/data', dataRouter)
api.use('/admin', adminRouter)
api.use('/customer', customerRouter)
api.get('/food/search', async (req, res) => {
    const { key } = req.query
    const limit = req.query.limit ?? 5
    try {
        const foods = await Food.find({
            name: {$regex: new RegExp(key, "i")}
        }).limit(limit)        

        return sendSucces(
            res,
            'search successfully',
            foods
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
})
api.get('/get-exercise', async (req, res) => {
    const exercises = await Exercise.find({
        primaryMuscles: {
            $in: ['biceps']
        }
    }).limit(5)
    return res.json(exercises)
})
api.use('/merchant', merchantRouter)
api.get('/test-access-token', authenticate(), (req, res) => res.sendStatus(200))
api.post('/test-upload-file', handleUploadMultiImage('images'), (req, res) => {
    console.log(req.files.map(file => file.path))
    return res.sendStatus(200)
})
export default api