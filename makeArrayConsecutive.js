// Find the quanitity of numerical 'gaps' in an array

function makeArrayConsecutive2(statues) {
    let min = Math.min(...statues)
    let max = Math.max(...statues)
    let missingStatues = 0
    for (let i = min; i < max; ++i)
        if (statues.indexOf(i) === -1) ++missingStatues
    return missingStatues
}
