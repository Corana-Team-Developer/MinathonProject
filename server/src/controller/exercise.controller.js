import Exercise from "../model/exercise.model";
import { sendErrorServerInterval, sendSuccess } from "../helper/client";

/**
 * @route POST /admin/exercise/create
 */
export async function createExerciseController(req, res) {
    try {
        const exercise = await Exercise.create(req.body)

        return sendSuccess(
            res, 
            'create exercise successfully.',
            exercise
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /admin/exercise/get-all
 */
 export async function getAllExerciseController(req, res) {
    try {
        const exercises = await Exercise.find()

        return sendSuccess(
            res, 
            'get all exercises successfully.',
            exercises
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /admin/exercise/:exerciseid
 */
 export async function getAllExerciseController(req, res) {
     const { exerciseId } = req.params
    try {
        const exercise = await Exercise.find(exerciseId)

        return sendSuccess(
            res, 
            'get all exercises successfully.',
            exercise
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}