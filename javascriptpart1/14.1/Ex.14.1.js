const numbers = [1, 8, 2, 16, 95];
const maxnumber = numbers.reduce((max, curVal) => {
    if (curVal > max) return curVal; return max;
})
console.log(maxnumber);

// sum of even numbers 
// let result = 0;
// const evenNumbers = numbers.reduce((accumulator, curVal) => {
//     if (accumulator % 2 === 1) {
//         result += accumulator;
//     }
//     return curVal
// }
// 2. sum of even numbers
const evenNumbers = numbers.reduce((accumulator, curVal) => {
    // console.log(accumulator);
    // console.log(curVal);
    if (curVal % 2 === 1) {
        return accumulator
    } else {
        return accumulator + curVal
    }
}, 0)
console.log(evenNumbers);


// 3. average
const numbers3 = [20, 30, 40,];
const everageNumbers = numbers3.reduce((accumulator, curVal) => {
    if (curVal !== numbers3[numbers3.length - 1]) {
        return accumulator + curVal;
    } else {
        return (accumulator + curVal) / numbers3.length;
    }
})

console.log(everageNumbers);