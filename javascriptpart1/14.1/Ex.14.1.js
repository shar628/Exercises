const numbers = [5, 8, 24, 636, 87, 95];
const maxnumber = numbers.reduce((max, curVal) => {
    if (curVal > max) return curVal; return max;
})
console.log(maxnumber);
