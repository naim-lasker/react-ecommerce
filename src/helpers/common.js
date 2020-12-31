/**
 * validate format amount
 * @param {*} number
 */

export const formatAmount = num => {
    if (num) {
        return Number(num).toFixed(2)
    }
    return 0.0
}


/**
 * percentage
 * @param {*} partial
 * @param {*} total
 */

export const findPercentage = (partial, total) => {
    return ((partial * total) / 100)
}