import { Router } from "express";
import { getAllCustomerController, getProfitController, updateProfileController } from "../controller/merchant.controller.js";
import authenticate from "../middleware/authenticate.js";
import handleUploadImage from "../middleware/handleUploadImage.js";

const router = Router()
router.use(authenticate())

router.post(
    '/update-profile',
    handleUploadImage('CV'),
    updateProfileController
)

router.get(
    '/get-profit',
    getProfitController
)

router.get(
    '/customer/get-all',
    getAllCustomerController
)

export default router