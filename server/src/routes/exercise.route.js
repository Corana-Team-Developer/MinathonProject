import { Router } from "express";
import { createExerciseController, getAllExerciseController } from "../controller/exercise.controller";

const router = Router()

router.post(
    '/create',
    createExerciseController
)

router.get(
    '/get-all',
    getAllExerciseController
)

router.get(
    '/:exerciseId'
)

export default router