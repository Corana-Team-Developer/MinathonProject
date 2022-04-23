import { Router } from "express"
import { sendSucces } from "../helper/client.js"
import { FITNESS_ACTIVE, WEEKLY_GOAL } from "../model/customer.model.js"

const router = Router()

router.get('/get-fitness-active', (req, res) => {
    return sendSucces(
        res,
        'retreive data fitness active successfully.',
        FITNESS_ACTIVE
    )
})

router.get('/get-weekly-goal', (req, res) => {
    return sendSucces(
        res,
        'retreive data fitness goal successfully.',
        WEEKLY_GOAL
    )
})

export default router