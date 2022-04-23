import Merchant from "../model/merchant.model.js";
import { sendErrorServerInterval, sendSucces } from "../helper/client.js";
import { convertPathFileToUrl, getCleanObject } from "../helper/common.js";
import Customer from "../model/customer.model.js";
import User from "../model/user.model.js";
import Contract, { STATUS } from "../model/contract.model.js";

/**
 * @route 	POST /merchant/update-profile
 */
export async function updateProfileController(req, res) {
    const { user } = res.locals
    const CV = convertPathFileToUrl(req.file?.path)
    try {
        const merchant = await Merchant.findOneAndUpdate({user: user._id}, {...req.body, CV}, { new: true }) 
        return sendSucces(
            res,
            "update merchant successfully.",
            merchant
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /merchant/customer/get-all 
 */
export async function getAllCustomerController(req, res) {
    const page = req.query.page ?? 1
    const limit = req.query.limit ?? 8
    const { gender, goal, provinceCode, districtCode, wardCode } = req.query
    const query = getCleanObject({
        gender,
        goal
    })
    if (provinceCode) {
        query['addressWorkout.provinceCode'] = provinceCode
    } else if (districtCode) {
        query['addressWorkout.districtCode'] = districtCode
    }
    else if (wardCode) {
        query['addressWorkout.wardCode'] = wardCode
    }
    
    try {
        const customers = await Customer.find(query)
        .skip((page-1)*limit)
        .limit(limit)
        return sendSucces(
            res,
            "get suitable customer successfully.",
            customers
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route
 */
export async function getProfitController(req, res) {
    const { user } = res.locals
    let profit = 0
    try {
        const contracts = await Contract.find({status: STATUS.COMPLETED, $or:[{createBy: user._id}, {receiveBy: user._id}]})
        contracts.forEach(contract => {
            profit += contract.price
        })
        return sendSucces(
            res,
            "get profit successfully.",
            profit
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}