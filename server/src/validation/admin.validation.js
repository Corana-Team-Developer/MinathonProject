import { check } from "express-validator"

/**
 * Rule validate form in admin create plan suggest
 * @returns 
 */
export const createPlanSuggestValidationRule = () => [
    check('BMI.start')
    .exists().withMessage('BMI is object contain start field.').bail()
    .isInt({gt:0}).withMessage('start field of BMI is unvalid'),

    check('BMI.end')
    .exists().withMessage('BMI is object contain end field.').bail()
    .isInt({gt:0}).withMessage('end field of BMI is unvalid')
]

/**
 * Rule validate form in admin update plan suggest
 * @returns 
 */
export const updatePlanSuggestValidationRule = createPlanSuggestValidationRule