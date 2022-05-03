const arr5 = [1, 2, 3, 1, 4, 5, 4, 6, 8, 7, 5, 6];

function fun1(arr1) {
    const newarr5 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (newarr5.indexOf(arr1[i]) == -1) {
            newarr5.push(arr1[i]);
        }
    }
    return newarr5;
};

console.log(arr5);
console.log(fun1(arr5));