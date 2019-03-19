// Given an array of integers, find the pair of adjacent elements that has the largest product and return the product

function adjacentElementsProduct(inputArray) {
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < inputArray.length-1; ++i) {
        let prod = inputArray[i] * inputArray[i+1]
        max = (prod > max) ? prod : max
    }
    return max
}
