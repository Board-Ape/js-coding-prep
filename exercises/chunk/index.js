// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = []
    let startIdx = 0

    while (startIdx < array.length) {
        let endIdx = index + size
        chunked.push(array.slice(startIdx, endIdx))
        startIdx += endIdx
    }

    return chunked
}


// function chunk(array, size) {
//     let result = []
//     let subArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (subArr.length < size) {
//             subArr.push(array[i])
//         }
//         else {
//             result.push(subArr)
//             subArr = []
//             subArr.push(array[i])
//         }
//     }

//     result.push(subArr)

//     return result
// }

module.exports = chunk;
