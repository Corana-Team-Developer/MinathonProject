import omit from "lodash.omit"
import jwt from "jsonwebtoken"
import { HttpStatusCode, sendError, sendErrorServerInterval, sendSucces } from "../helper/client.js"
import User, { UserType } from "../model/user.model.js"
import config from "../../config/default.js"
import Customer from "../model/customer.model.js"
import Merchant from "../model/merchant.model.js"

/**
 * @route POST /api/auth/register
 * @description
 */
export async function userRegisterController(req, res) {
    const userType = req.body.userType ?? UserType.CUSTOMER
    if (userType == UserType.ADMIN) {
        return sendError(
            res,
            HttpStatusCode.BAD_REQUEST,
            'userType is invalid.'
        )
    }

    try {
        const user = await User.create({...req.body, userType})
        if (userType === UserType.CUSTOMER) {
            await Customer.create({user: user._id, gender: req.body.gender})
        } else if (userType === UserType.MERCHANT) {
            await Merchant.create({user: user._id, gender: req.body.gender})
        }

        return sendSucces(
            res,
            "user register successfully.",
            omit(user.toJSON(), "password")
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}

/**
 * @route POST /api/auth/login
 * @description
 */
export async function userLoginController(req, res) {
    const { password, email } = req.body

    try {
        let validatePassword = true 
        const user = await User.findOne({ email })

        if (!user) {
            validatePassword = false
        } else {
            validatePassword = await user.comparePassword(password)
        }

        if (!validatePassword) {
            return sendError(
                res,
                HttpStatusCode.UNAUTHORIZED,
                'email or password is wrong.'
            )
        }

        // create access token
        const accessToken = await jwt.sign(
            {user: user._id},
            config.jwtSecretKey,
            {expiresIn: config.accessTokenTtl}
        )

        return sendSucces(
            res,
            'user login successfully.',
            {
                user: omit(user.toJSON(), "password"),
                accessToken 
            }
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}