import { Router } from "express"
import authenticate from "../middleware/authenticate.js"
import { handleUploadMultiImage } from "../middleware/handleUploadImage.js"
import authRouter from "./auth.route.js"
import dataRouter from "./data.route.js"
import adminRouter from "./admin.route.js"
import contractRouter from "./contract.route.js"
import customerRouter from "./customer.route.js"
import merchantRouter from "./merchant.route.js"

const api = Router()

api.use('/contract', contractRouter)
api.use('/auth', authRouter)
api.use('/data', dataRouter)
api.use('/admin', adminRouter)
api.use('/customer', customerRouter)
api.use('/merchant', merchantRouter)
api.get('/test-access-token', authenticate(), (req, res) => res.sendStatus(200))
api.post('/test-upload-file', handleUploadMultiImage('images'), (req, res) => {
    console.log(req.files.map(file => file.path))
    return res.sendStatus(200)
})
export default api