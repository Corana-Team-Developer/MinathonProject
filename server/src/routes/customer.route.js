import { Router } from "express"
import { updateWorkoutProfile, updateWorkoutGoal, appendWorkoutProgress, appendFoodToFoodTracking, editFoodFromFoodTracking, deleteFoodFromFoodTracking, getFoodTracking } from "../controller/customer.controller.js"
import checkUserRole from "../middleware/checkUserRole.js"
import { UserType } from "../model/user.model.js"

const router = Router()

router.use(checkUserRole([UserType.CUSTOMER]))
router.post('/workout/update-profile', updateWorkoutProfile)
router.post('/workout/update-goal', updateWorkoutGoal)
router.post('/workout/append-progress', appendWorkoutProgress)
router.get('/food', getFoodTracking)
router.post('/food/append', appendFoodToFoodTracking)
router.post('/food/edit', editFoodFromFoodTracking)
router.post('/food/delete', deleteFoodFromFoodTracking)
export default router