import Customer from "../model/customer.model.js"
import FoodTracking from "../model/foodTracking.model.js"
import { getCleanObject } from "../helper/common.js"
import { HttpStatusCode, sendError, sendErrorServerInterval, sendSucces } from "../helper/client.js"
import { getCurrentDate } from "../helper/date.js"
import Food from "../model/food.model.js"

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

/**
 * @route POST /api/customer/food/append
 * @description append food customer progress training
 */
export async function appendFoodToFoodTracking(req, res) {
    const { user } = res.locals
    const { foodId, quantity, mealType } = req.body
    const currentDate = getCurrentDate()

    try {
        let foodTracking = await FoodTracking.findOne({
            createdAt: currentDate,
            user: user._id
        })
        const food = {
            food: foodId,
            quantity,
            mealType
        }

        if (!foodTracking) {
            foodTracking = await FoodTracking.create({
                user: user._id,
                foods: [food],
                createdAt: currentDate
            })
        } else {
            foodTracking.foods.push(food)
            await foodTracking.save()
        }

        return sendSucces(
            res,
            'append food successfully.',
            foodTracking
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route POST /api/customer/food/edit
 * @description edit food in foodTracking customer in progress training
 */
export async function editFoodFromFoodTracking(req, res) {
    const { user } = res.locals
    const { foodInFoodsId, quantity, mealType } = req.body
    const currentDate = getCurrentDate()

    try {
        let foodTracking = await FoodTracking.findOne({
            createdAt: currentDate,
            user: user._id
        })

        if (!foodTracking) {
            return sendError(
                res,
                HttpStatusCode.BAD_REQUEST,
                'food tracking now is unavailable.'
            )
        }
        foodTracking.foods = foodTracking.foods.map(foodInFoods => {
            if (foodInFoods._id == foodInFoodsId) {
                foodInFoods.quantity = quantity
                foodInFoods.mealType = mealType
            }
            return foodInFoods
        })
        await foodTracking.save()

        return sendSucces(
            res,
            'edit food in foodTracking successfully.',
            foodTracking
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route POST /api/customer/food/delete
 * @description delete food in foodTracking customer in progress training
 */
 export async function deleteFoodFromFoodTracking(req, res) {
    const { user } = res.locals
    const { foodInFoodsId } = req.body
    const currentDate = getCurrentDate()

    try {
        let foodTracking = await FoodTracking.findOne({
            createdAt: currentDate,
            user: user._id
        })

        if (!foodTracking) {
            return sendError(
                res,
                HttpStatusCode.BAD_REQUEST,
                'food tracking now is unavailable.'
            )
        }
        foodTracking.foods = foodTracking.foods.filter(foodInFoods => foodInFoods._id != foodInFoodsId)
        await foodTracking.save()

        return sendSucces(
            res,
            'edit food in foodTracking successfully.',
            foodTracking
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /api/customer/food
 * @description get foodTracking detail
 */
 export async function getFoodTracking(req, res) {
    const { user } = res.locals
    let date = req.body.date ?? getCurrentDate()

    try {
        let foodTracking = await FoodTracking.findOne({
            createdAt: date,
            user: user._id
        }).populate('foods.food')
        
        if (foodTracking) {
            let totalCalories = 0
            foodTracking.foods.forEach(foodInFoods => {
                totalCalories += foodInFoods.food.calories * foodInFoods.quantity
            })

            foodTracking = {...foodTracking.toObject(), totalCalories}
        }

        return sendSucces(
            res,
            'retreive foodTracking successfully.',
            foodTracking
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

