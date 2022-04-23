import { Router } from "express";
import exerciseRoute  from "./exercise.route.js"
import categoryRoute from "./category.route"
const admin = Router()

admin.use('/exercise', exerciseRoute)
admin.use('/category', categoryRoute)

export default admin