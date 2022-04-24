import { Router } from "express"
import { updateWorkoutProfile, updateWorkoutGoal, appendWorkoutProgress, appendFoodToFoodTracking, editFoodFromFoodTracking, deleteFoodFromFoodTracking, getFoodTracking,
    createFeedback, updateFeedback, deleteFeedback, getMerchantFeedback, showFeedback } from "../controller/customer.controller.js"
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
router.post('/feedback/create', createFeedback)
router.post('/feedback/update', updateFeedback)
router.post('/feedback/delete', deleteFeedback)
router.get('/feedback/merchant/:merchantId', getMerchantFeedback)
router.get('/feedback/:feedbackId', showFeedback)
export default router