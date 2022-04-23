import Category from "../model/category.model";
import { sendErrorServerInterval, sendSuccess } from "../helper/client";

/**
 * @route POST /admin/category/create
 * 
 */
export async function createCategoryController(req, res) {
    try {
        const category = await Category.create(req.body)

        return sendSuccess(
            res, 
            'create new category successfully.',
            category
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /admin/category/get-all
 * 
 */
export async function getAllCategoryController(req, res) {
    try {
        const categories = Category.find()

        return sendSuccess(
            res,
            'get all category successfully.',
            categories
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /admin/category/:categoryId
 * 
 */
 export async function getCategoryController(req, res) {
    const { categorieId } = req.params
    try {
        const category= Category.find(categorieId)

        return sendSuccess(
            res,
            "retreive category sucessfully.",
            category
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}