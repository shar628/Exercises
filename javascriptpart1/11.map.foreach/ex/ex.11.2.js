const numbers1 = [25, 45, 60, 12, 10, 3, 5]
// לא הצלחתי עם  foreach
const doubleValues1 = numbers1.map(function (n1) {
    return n1 * 2;
});
console.log(doubleValues1);

// סעיף 2
function onlyEvenValues2(array) {
    const newArr = array.map(function (n2) {
        if (n2 % 2 === 0) {
            console.log(n2);
        }
    })
};

const onlyEvenValues = numbers1.map(function (n2) {
    if (n2 % 2 === 0) {
        console.log(n2);
    }
})
