import { Router } from "express";
import { createCategoryController, getAllCategoryController, getCategoryController } from "../controller/category.controller";
import validate from "../middleware/validate";

const router = Router()

router.post(
    '/create',
    createCategoryController

)

router.get(
    '/get-all',
    getAllCategoryController

)

router.get(
    '/:categoryId',
    getCategoryController
)