const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foods1 = foods.sort();
// console.log(foods1);
const foods2 = foods.reverse();
// console.log(foods2);
// i didnt do 

// b

const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
const foods3 = foodsWithUpperCase.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a[0] < b[0]) {
        return -1
    } else if (a[0] > b[0]) {
        return 1;
    }
    return 0
});
// console.log(foods3)


const foodsWithUpperCase3 = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
// const words = ["apple", "supercalifragilisticexpialidocious", 
// const words = ["apple", "supercalifragilisticexpialidocious",
// "hi", "zoo"];

const foods4 = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foods5 = [...foods4].sort();
// console.log(foods5);
const foods6 = [...foods4].sort((a, b) => {
    if (a[0] > b[0]) {
        return -1;
    } else if (a[0] < b[0]) {
        return 1;
    }
    return 0;
});
// console.log(foods6);
// / c  
// c.1. Sort the array of strings from the longest word to the 
// shortest word only using the sort function
const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"];
const words7 = [...words];
// console.log(words7);
const words8 = [...words].sort((a, b) => {
    if (a.length > b.length) {
        return -1;
    }
    return 0;
});
// console.log(words8);
// from mdn ::Array.prototype.sort()
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
const items2 = items.sort(function (a, b) {
    return a.value - b.value;
});
console.log(items2);
// sort by name
const items4 = items.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});
console.log(items4);