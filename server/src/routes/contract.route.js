import { Router } from "express";
import { createContractController, getDraftController, getPendingController, updateContractController, updateStatusContractController } from "../controller/contract.controller.js";
import authenticate from "../middleware/authenticate.js";
// import validate from "../middleware/validate";

const router = Router()

router.use(authenticate())

router.post(
    '/create',
    createContractController
)

router.get(
    '/get-pending',
    getPendingController
)

router.get(
    '/get-draft',
    getDraftController
)

router.post(
    '/:contractId/update',
    updateContractController
)

router.post(
    '/:contractId/update-status',
    updateStatusContractController
)

router.get(
    '/test',
    (req, res) =>{
        console.log("hi")
    }
)

export default router