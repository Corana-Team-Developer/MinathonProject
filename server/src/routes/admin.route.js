import { Router } from "express"
import checkUserRole from "../middleware/checkUserRole.js"
import User, { UserType } from "../model/user.model.js"
import { createCategoryController, getAllCategoryController, getCategoryController } from "../controller/category.controller.js";
import { createExerciseController, getAllExerciseController } from "../controller/exercise.controller.js";
import { createPlanSuggestController, updatePlanSuggestController, getAllPlanSuggestController, showPlanSuggestController } from "../controller/admin.controller.js"
// import requireAdmin from "../middleware/requireAdmin.js"

const router = Router()

// router.use(requireAdmin())
router.use(checkUserRole([UserType.ADMIN]))

router.post('/plan-suggest/create', 
    createPlanSuggestController
)

router.post('/plan-suggest/update', 
    updatePlanSuggestController
)

router.get('/plan-suggest/get-all', 
    getAllPlanSuggestController
)

router.get('/plan-suggest/:planSuggestId', 
    showPlanSuggestController
)

//category
router.post(
    'category/create',
    createCategoryController

)

router.get(
    'category/get-all',
    getAllCategoryController

)

router.get(
    'category/:categoryId',
    getCategoryController
)

//exercise
router.post(
    'exercise/create',
    createExerciseController
)

router.get(
    'exercise/get-all',
    getAllExerciseController
)

router.get(
    'exercise/:exerciseId'
)


export default router