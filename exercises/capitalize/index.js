// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Questions to ask:
// Do we need to clean or replace characters aside from punctuation.
// Always be a valid string?

function capitalize(str) {
    if (typeof str === 'string') {
        str = str.split('')
        for (let idx = 0; idx < str.length; idx++) {
            if (idx === 0) {
                str[idx] = str[idx].toUpperCase()
            }
            else if (str[idx] === ' ') {
                str[idx + 1] = str[idx + 1].toUpperCase()
                idx += 2
            }
        }
        return str.join('')
    }
    else {
        return `This ${str} is not a valid string`
    }
}

module.exports = capitalize;
