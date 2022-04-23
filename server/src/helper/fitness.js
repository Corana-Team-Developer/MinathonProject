import { FITNESS_ACTIVE } from "../model/customer.model.js"
import { UserGender } from "../model/user.model.js"

/**
 * @param {*} weight (kg) : number
 * @param {*} height (cm) : number
 * @returns BMI
 */
export function calculateBMI(weight, height) {
    return weight / (height * height)
}

/**
 * @param {*} weight (kg) : number
 * @param {*} height (cm) : number
 * @param {*} age : number
 * @param {*} gender : UserGender 
 * @returns BMR
 */
export function calculateBMR(weight, height, age, gender) {
    if (gender === UserGender.FEMALE) {
        return 655 + 9.6 * weight + 1.8 * height - 4.7 * age
    } else if (gender === UserGender.MALE) {
        return 66 + 13.7 * weight + 5 * height - 6.8 * age
    } else {
        throw new Error('gender is invalid.')
    }
}

/**
 * @param {*} BMR : number
 * @param {*} active : FITNESS_ACTIVE
 * @returns TDEE
 */
export function calculateTDEE(BMR, active) {
    switch (active) {
        case 0:
            return BMR * 1.2
        case 1:
            return BMR * (1.4 + 1.3) / 2
        case 2:
            return BMR * (1.5 + 1.6) / 2
        case 3:
            return BMR * (1.7 * 1.8) / 2
        case 4:
            return BMR * (2 + 1.9) / 2
        default:
            throw new Error('active is invalid.')
    }
}