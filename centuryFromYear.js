// Given a year, return the century it is in.

function centuryFromYear(year) {
    return Math.floor(((year-1) / 100) + 1)
}
    