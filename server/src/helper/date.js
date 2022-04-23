/**
 * @returns current date
 */
export function getCurrentDate() {
    const date = new Date()
    return date.toISOString().split('T')[0]
}

/**
 * @param {*} dayNumbers , default 1
 * @returns date after current with number
 */
export function getNextDate(dayNumbers = 1) {
    const date = new Date()
    date.setDate(date.getDate() + dayNumbers)
    date.setHours(0, 0, 0, 0)

    return date.toISOString()
}