import { Router } from "express"
import { createPlanSuggestController, updatePlanSuggestController, getAllPlanSuggestController, showPlanSuggestController } from "../controller/admin.controller.js"
// import requireAdmin from "../middleware/requireAdmin.js"

const router = Router()

// router.use(requireAdmin())

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

export default router