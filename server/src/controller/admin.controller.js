import omit from "lodash.omit"
import { sendErrorServerInterval, sendSucces } from "../helper/client.js"
import PlanSuggest from "../model/planSuggest.model.js"

/**
 * @route /api/admin/plan-suggest/get-all
 * @description admin get all plan suggest
 * @access private only Admin
 */
export async function getAllPlanSuggestController(req, res) {
    const page = req.query.page ?? 1
    const limit = req.query.limit ?? 8
    try {
        const PlanSuggests = await PlanSuggest.find({})
            .skip((page - 1) * limit)
            .limit(limit);
        return sendSucces(
            res,
            "get all plan suggest successfully.",
            PlanSuggests
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route /api/admin/plan-suggest/create
 * @description admin create new plan suggest
 * @access private only Admin
 */
export async function createPlanSuggestController(req, res) {
    try {
        const planSuggest = await PlanSuggest.create(req.body)
        return sendSucces(
            res,
            "create plan suggest successfully.",
            planSuggest
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route /api/admin/plan-suggest/update
 * @description admin update plan suggest
 * @access private only Admin
 */
export async function updatePlanSuggestController(req, res) {
    const {planSuggestId} = req.body
    try {
        const planSuggest = await PlanSuggest.findByIdAndUpdate(planSuggestId, req.body)
        return sendSucces(
            res,
            "create plan suggest successfully.",
            planSuggest
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route /api/admin/plan-suggest/:planSuggestId
 * @description admin show plan suggest
 * @access private only Admin
 */
 export async function showPlanSuggestController(req, res) {
    const {planSuggestId} = req.params
    try {
        const planSuggest = await PlanSuggest.findById(planSuggestId)
        return sendSucces(
            res,
            "show plan suggest successfully.",
            planSuggest
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route /api/admin/plan-suggest/delete
 * @description admin delete plan suggest
 * @access private only Admin
 */
export async function deletePlanSuggestController(req, res) {
    const {planSuggestId} = req.body
    try {
        await PlanSuggest.findByIdAndDelete(planSuggestId, req.body)
        return sendSucces(
            res,
            "delete plan suggest successfully.",
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}