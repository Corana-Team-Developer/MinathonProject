import Customer from "../model/customer.model.js"
import { getCleanObject } from "../helper/common.js"
import { sendErrorServerInterval, sendSucces } from "../helper/client.js"

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

export async function appendWorkoutProgress(req, res) {
    const { user } = res.locals
    const { weight } = req.body

    try {
        const customer = await Customer.findOne({user: user._id})
        
        customer.progress.push({
            time: new Date(),
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