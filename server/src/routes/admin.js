import { Router } from "express"
import exerciseRoute  from "./exercise.route.js"
import categoryRoute from "./category.route.js"
import checkUserRole from "../middleware/checkUserRole.js"
import { UserType } from "../model/user.model.js"

const admin = Router()

admin.use(checkUserRole([UserType.ADMIN]))
admin.use('/exercise', exerciseRoute)
admin.use('/category', categoryRoute)

export default admin