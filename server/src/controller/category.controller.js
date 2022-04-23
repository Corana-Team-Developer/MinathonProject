import Category from "../model/category.model.js";
import { sendErrorServerInterval, sendSucces } from "../helper/client.js";

/**
 * @route POST /admin/category/create
 * 
 */
export async function createCategoryController(req, res) {
    try {
        const category = await Category.create(req.body)

        return sendSucces(
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
        const categories = await Category.find()
        return sendSucces(
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
    const { categoryId } = req.params
    try {
        const category = await Category.findById(categoryId)

        return sendSucces(
            res,
            "retreive category sucessfully.",
            category
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}