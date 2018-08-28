// Given a string, check if it is a palindrome

function checkPalindrome(inputString) {
    let len = inputString.length 
    for (let i = 0; i < len/2; ++i) 
        if(inputString[i] !== inputString[len-i-1]) return false
    return true
}

// OR

function checkPalindrome(inputString) {
    let rev = string.split('').reverse().join('')
    return inputString === rev
}