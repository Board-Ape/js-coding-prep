// =================================
// Operators
// =================================

// const user = { name: 'Danny' }
// const zip = user?.address?.zip
// console.log(zip)

// What id those key's do not exist. They return udefined. 
// The logic here, using these operators we would have a concise way of writing.
// No need for a nested ternary or switch/case statement



// =================================
// Async/Await
// =================================

const fetch = require('node-fetch')

async function fetchAvatarUrl(userId) {
    const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`);
    const data = await response.json()

    return data.imageUrl

    // return fetch(`http://catappapi.herokuapp.com/users/${userId}`)
    //     .then(res => res.json())
    //     .then(data => data.imageUrl)
}


const result = fetchAvatarUrl(123)
result

// Promise: (which is returned from the fetch call.)
    // Eventual result of an asynchronous operation. Placeholder

// Inside a function marked as async, you are allowed to place the await keyword
// in front of an expression that returns a promise. When you do, the execution 
// of the async function is paused until the promise is resolved.