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

// const fetch = require('node-fetch')


// async function fetchAvatarUrl(userId) {
//     const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`)
//     response
//     const data = await response.json()
//     return await Promise.all(data.cats.map(async (catId) => {
//         const res = await fetch(
//           `http://catappapi.herokuapp.com/cats/${catId}`
//         );
//         const result = await res.json()
//         return result.imageUrl
//     }))
// }

// ===============
// async function fetchAvatarUrl(userId) {
//     const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`);
//     const data = await response.json()

//     return data.imageUrl

    // return fetch(`http://catappapi.herokuapp.com/users/${userId}`)
    //     .then(res => res.json())
    //     .then(data => data.imageUrl)
// }
// ===============

// const result = fetchAvatarUrl(123)
// result

// Promise: (which is returned from the fetch call.)
    // Eventual result of an asynchronous operation. Placeholder

// Inside a function marked as async, you are allowed to place the await keyword
// in front of an expression that returns a promise. When you do, the execution 
// of the async function is paused until the promise is resolved.


// =================================
// Var/Let/Const
// =================================


// ===============
// Functions Scope: ES5 has only one type, function scope
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log(i)
// Most other languages don't have this nuance

// IIFE
"use strict";
// Make sure any time you use a new line with parens is a semi
// (function (str) {
//     for (var j = 0; j < 10; j++) {
//         console.log(j)
//     }
// })()

// console.log(j)

// var i = 999;
// (function my() {
//     console.log(i)
// })()
// if (true) {
//     let i = 888
//     console.log(i)
// }
// console.log(i);

// Block Scoping with let and const