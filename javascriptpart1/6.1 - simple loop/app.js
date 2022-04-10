const arr1 = [1, 7, 3, 0, -5, 7, 3, 9];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// };
// arr1.forEach(function (arrayItem, index) {
//     console.log(arrayItem,/* index */)
// })

// .2 לא עשיתי 


// .3
// const arraySum = 0;
// for (let i = 0; i < arr1.length; i++) {
//     arraySum += arr1[i];
// }
// console.log('the sum is ' + arraySum);

// Creating array
var arr = [4, 8, 7, 13, 12]

// Using reduce function to find the sum
var sum = arr.reduce(function (x, y) {
    return x + y;
}, 0);

// Prints: 44
console.log("Sum using Reduce method: " + sum);
