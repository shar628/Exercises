const numbers1 = [25, 45, 60, 12, 10, 3, 5]
// לא הצלחתי עם  foreach
// function doubleValues1 (ar1) {

// } 
//  numbers1.map(function (n1) {
//     return n1 * 2;
// });
// console.log(doubleValues1);

function doubleValues2(a) {
    let new_a = [];
    a.forEach(function (value) {
        new_a.push(value * 2);
    })
    return new_a;
}
const arr1 = [4, 5, 6]
console.log(doubleValues2(arr1));


function onlyEvenValues2(array) {
    let new_a2 = [];
    array.map(function (n2) {
        if (n2 % 2 === 0) {
            new_a2.push(n2)
            // console.log(n2);
        }
    })
    return new_a2;
};
const arr2 = [4, 5, 6]
console.log(onlyEvenValues2(arr2));
// סעיף 2
const onlyEvenValues = numbers1.map(function (n2) {
    if (n2 % 2 === 0) {
        // console.log(n2);
    }
})
