import { Router } from "express"
import checkUserRole from "../middleware/checkUserRole.js"
import User, { UserType } from "../model/user.model.js"
import { createCategoryController, getAllCategoryController, getCategoryController } from "../controller/category.controller.js";
import { createExerciseController, getAllExerciseController, getExerciseController } from "../controller/exercise.controller.js";
import { createPlanSuggestController, updatePlanSuggestController, getAllPlanSuggestController, showPlanSuggestController, deletePlanSuggestController } from "../controller/admin.controller.js"
// import requireAdmin from "../middleware/requireAdmin.js"

const router = Router()

<<<<<<< HEAD
// router.use(requireAdmin())
=======
router.use(checkUserRole([UserType.ADMIN]))
>>>>>>> 9629f8c2cb1b54d864e71ff4473ef491466dbaeb

// plan suggest
router.post('/plan-suggest/create', 
    checkUserRole([UserType.ADMIN]),
    createPlanSuggestController
)

router.post('/plan-suggest/update', 
    checkUserRole([UserType.ADMIN]),
    updatePlanSuggestController
)

router.get('/plan-suggest/get-all', 
    getAllPlanSuggestController
)

router.get('/plan-suggest/:planSuggestId', 
    showPlanSuggestController
)

router.delete('/plan-suggest/delete', 
    deletePlanSuggestController
)

//category
router.post(
    '/category/create',
    checkUserRole(UserType.ADMIN),
    createCategoryController

)

router.get(
    '/category/get-all',
    getAllCategoryController

)

router.get(
    '/category/:categoryId',
    getCategoryController
)

//exercise
router.post(
    '/exercise/create',
    checkUserRole(UserType.ADMIN),
    createExerciseController
)

router.get(
    '/exercise/get-all',
    getAllExerciseController
)

router.get(
    '/exercise/:exerciseId',
    getExerciseController
)


export default router