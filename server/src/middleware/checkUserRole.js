import { sendError } from "../helper/client.js"
import authenticate from "./authenticate.js"

export default function checkUserRole(role = []) {
    return [
        authenticate(),
        (req, res, next) => {
            const { user } = res.locals
            if (role.includes(user.userType)) {
                return next()
            }

            return sendError(
                res,
                HttpStatusCode.UNAUTHORIZED,
                'Unathorized.'
            )
        }
    ]
}