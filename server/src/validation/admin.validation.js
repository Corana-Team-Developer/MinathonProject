import { check } from "express-validator"

/**
 * Rule validate form in admin create plan suggest
 * @returns 
 */
export const createPlanSuggestValidationRule = () => [
    check('BMI.start')
    .exists().withMessage('BMI is object contain start field.'),

    check('BMI.end')
    .exists().withMessage('BMI is object contain end field.'),
]

/**
 * Rule validate form in admin update plan suggest
 * @returns 
 */
export const updatePlanSuggestValidationRule = createPlanSuggestValidationRule