import { Router } from "express";
import { createBlogController, deleteBlogController, getAllBlogController, getBlogController, updateBlogController } from "../controller/blog.controller.js";
import checkUserRole from "../middleware/checkUserRole.js";
import handleUploadImage from "../middleware/handleUploadImage.js";
import { UserType } from "../model/user.model.js";

const router = Router()

router.post(
    '/create',
    checkUserRole([UserType.ADMIN]),
    handleUploadImage('images'),
    createBlogController
)

router.get(
    '/get-all',
    getAllBlogController
)

router.post(
    '/:blogId/update',
    checkUserRole([UserType.ADMIN]),
    handleUploadImage('images'),
    updateBlogController
)

router.get(
    '/:blogId',
    getBlogController
)

router.post(
    '/:blogId/delete',
    checkUserRole([UserType.ADMIN]),
    deleteBlogController
)

export default router

