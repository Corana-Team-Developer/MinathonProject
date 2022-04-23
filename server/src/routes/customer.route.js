import { Router } from "express"
import { updateWorkoutProfile, updateWorkoutGoal, appendWorkoutProgress } from "../controller/customer.controller.js"
import checkUserRole from "../middleware/checkUserRole.js"
import { UserType } from "../model/user.model.js"

const router = Router()

router.use(checkUserRole([UserType.CUSTOMER]))
router.post('/workout/update-profile', updateWorkoutProfile)
router.post('/workout/update-goal', updateWorkoutGoal)
router.post('/workout/append-progress', appendWorkoutProgress)

export default router