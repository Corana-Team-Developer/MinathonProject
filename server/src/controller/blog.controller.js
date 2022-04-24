import Blog from "../model/blog.model.js";
import { sendErrorServerInterval, sendSucces } from "../helper/client.js";
import { convertPathFileToUrl } from "../helper/common.js";

/**
 * @route POST blog/create
 */
export async function createBlogController(req, res) {
    const images = convertPathFileToUrl(req.file?.path)
    console.log(req.files)
    const { user } = res.locals
    try {
        const blog = await Blog.create({...req.body, admin: user._id, images})

        return sendSucces(
            res,
            "create blog successfully.",
            blog
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET blog/get-all
 */
export async function getAllBlogController(req, res) {
    try {
        const blogs = await Blog.find()

        return sendSucces(
            res, 
            "get blogs successfully.",
            blogs
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route POST blog/:blogId/update
 */
export async function updateBlogController(req, res) {
    const images = convertPathFileToUrl(req.file?.path)
    const {blogId} = req.params 
    
    try {
        const blog = await Blog.findByIdAndUpdate(blogId, {...req.body, images}, {new: true})

        return sendSucces(
            res,
            "update blog successfully.",
            blog
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET blog/:blogId
 */
export async function getBlogController(req, res) {
const {blogId} = req.params

    try {
        const blog = await Blog.findById( blogId )

        return sendSucces(
            res, 
            "retreive blog successfully.",
            blog
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route DELETE blog/:blogId
 */
 export async function deleteBlogController(req, res) {
    const {blogId} = req.params
    
        try {
            const blog = await Blog.findByIdAndDelete(blogId)
    
            return sendSucces(
                res, 
                "delete blog successfully.",
                blog
            )
        } catch (error) {
            console.log(error)
            return sendErrorServerInterval(res)
        }
    }
    
