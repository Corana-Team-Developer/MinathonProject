import Customer from "../model/customer.model.js"
import { getCleanObject } from "../helper/common.js"
import { sendError, sendErrorServerInterval, sendSucces } from "../helper/client.js"

/**
 * @route POST /api/customer/workout/update-profile
 * @description update customer profile
 */
export async function updateWorkoutProfile(req, res) {
    const { user } = res.locals
    const { height, weight, addressWorkout, timeCanWorkout } = req.body

    try {
        const customer = await Customer.findOneAndUpdate(
            {user: user._id},
            getCleanObject({
                height, weight, addressWorkout, timeCanWorkout
            }),
            { new: true }
        )

        return sendSucces(
            res,
            'update customer workout profile successfully.',
            customer
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route POST /api/customer/workout/update-goal
 * @description update customer goal
 */
export async function updateWorkoutGoal(req, res) {
    const { user } = res.locals
    const { startingWeight, currentWeight, goalWeight, weeklyGoal, active } = req.body

    try {
        const customer = await Customer.findOneAndUpdate(
            {user: user._id},
            {
                goal: { startingWeight, currentWeight, goalWeight, weeklyGoal, active }
            },
            { new: true }
        )

        return sendSucces(
            res,
            'update customer workout goal successfully.',
            customer
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route POST /api/customer/workout/append-progress
 * @description append customer progress training
 */
export async function appendWorkoutProgress(req, res) {
    const { user } = res.locals
    const { weight } = req.body

    try {
        const customer = await Customer.findOne({user: user._id})
        const time = new Date()
        const lastTime = customer.progress.at(-1)?.time

        time.setUTCHours(0, 0, 0, 0)
        if (time.toString() === lastTime?.toString()) {
            customer.progress.pop()
        }

        customer.progress.push({
            time,
            weight
        })
        await customer.save()
        
        return sendSucces(
            res,
            'append customer workout progress successfully.',
            customer
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}