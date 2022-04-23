import { Router } from "express"
import authenticate from "../middleware/authenticate.js"
import { handleUploadMultiImage } from "../middleware/handleUploadImage.js"
import authRouter from "./auth.route.js"
<<<<<<< HEAD
import adminRouter from "./admin.js"
=======
import adminRouter from "./admin.route.js"
>>>>>>> 634dfea8e02680a5b6b80afd5074309c4512275a
const api = Router()

api.use('/auth', authRouter)
api.use('/admin', adminRouter)
<<<<<<< HEAD

=======
>>>>>>> 634dfea8e02680a5b6b80afd5074309c4512275a
api.get('/test-access-token', authenticate(), (req, res) => res.sendStatus(200))
api.post('/test-upload-file', handleUploadMultiImage('images'), (req, res) => {
    console.log(req.files.map(file => file.path))
    return res.sendStatus(200)
})
export default api