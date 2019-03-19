// Find the volume of a n-interesting polynomial

function shapeArea(n) {
    let total = 1
    let increment = 0 
    for (let i = 1; i < n; ++i) {
        increment += 4
        total += increment
    }
    return total
}
