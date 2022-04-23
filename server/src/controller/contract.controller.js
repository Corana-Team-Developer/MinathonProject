import Contract, { STATUS } from "../model/contract.model.js";
import { HttpStatusCode, sendError, sendErrorServerInterval, sendSucces } from "../helper/client.js";

/**
 * @route POST /contract/create
 */
export async function createContractController(req, res) {
    const { user } = res.locals
    try {
        const contract = await Contract.create({...req.body, createBy: user._id})
        return sendSucces(
            res,
            'create contract successfully.',
            contract
        )

    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * 
 * @route GET /contract/get (status == effective, canceled, completed)
 * @param {*} res 
 * @returns 
 */
export async function getContractController(req, res) {
    const { user } = res.locals
    try {
        const contracts = await Contract.find({$or:[{createBy: user._id}, {receiveBy: user._id}], $or:[{status: STATUS.CANCLE},{status: STATUS.COMPLETED}, {status: STATUS.EFFECTIVE}]})
        
        return sendSucces(
            res,
            "get contracts successfully.",
            contracts
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /contract/get-draft
 */
export async function getDraftController(req, res) {
    const { user } = res.locals
    try {
        const contracts = await Contract.find({receiveBy: user._id, status: STATUS.DRAFT })

        return sendSucces(
            res, 
            'get draft contracts successfully.',
            contracts
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route GET /contract/get-pending
 */
 export async function getPendingController(req, res) {
    const { user } = res.locals
    try {
        const contracts = await Contract.find({createBy: user._id, status: STATUS.PENDING })

        return sendSucces(
            res, 
            'get pending contracts successfully.',
            contracts
        )
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

/**
 * @route POST /contract/:contractId/update
 */
export async function updateContractController(req, res) {
    const { user } = res.locals
    const {contractId} = req.params
    
    try {
        const findContract = await Contract.findById(contractId)
        if( findContract.receiveBy.toString() == user._id ){
            const contract = await Contract.findByIdAndUpdate(contractId, req.body)
            return sendSucces(
                res, 
                'update contract successfully.',
                contract
            )
        } else {
            return sendError(
                res,
                HttpStatusCode.BAD_REQUEST,
                'not allow'
            )
        }
        
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}


/**
 * @route POST /contract/:contractId/update-status
 */
export async function updateStatusContractController(req, res) {
    const {contractId} = req.params
    const {status} = req.body

    try {
        const contract = await Contract.findByIdAndUpdate(contractId, {status})    

        return sendSucces(
            res,
            'update status contract successfully.',
            contract
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}