import { Router } from "express"
import authenticate from "../middleware/authenticate.js"
import { handleUploadMultiImage } from "../middleware/handleUploadImage.js"
import authRouter from "./auth.route.js"
const api = Router()

api.use('/auth', authRouter)

api.get('/test-access-token', authenticate(), (req, res) => res.sendStatus(200))
api.post('/test-upload-file', handleUploadMultiImage('images'), (req, res) => {
    console.log(req.files.map(file => file.path))
    return res.sendStatus(200)
})
export default api