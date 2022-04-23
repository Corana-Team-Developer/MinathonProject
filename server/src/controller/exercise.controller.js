import Exercise from "../model/exercise.model.js";
import { sendErrorServerInterval, sendSucces } from "../helper/client.js";

/**
 * @route POST /admin/exercise/create
 */
export async function createExerciseController(req, res) {
    try {
        const exercise = await Exercise.create(req.body)

        return sendSucces(
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

        return sendSucces(
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
 export async function getExerciseController(req, res) {
     const { exerciseId } = req.params
    try {
        const exercise = await Exercise.findById(exerciseId)

        return sendSucces(
            res, 
            'retreive exercise successfully.',
            exercise
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}