// // let populations = [1, 2, 3, 4];

// // let worldpoPulation = 7900;

// // const prec1 = (pop) => {
// //     console.log((pop / 7900) * 100);
// // }
// // prec1(395);

// // // function populationPercentages(populations) {
// // //     const percentages = [];



// // //     for (let i = 0; i < populations.length - 1; i++) {
// // //         let res1 = populations[1] / worldPopulation;
// // //         console.log(res1);
// // //     }
// // // }
// // // populationPercentages(); 


// // const populations = [10, 1441, 332, 83, 790, 395];

// // const percentageOfWorld1 = (population) => {
// //     return (population / 7900) * 100;
// // };
// // const populationPercentages = (arr) => {
// //     const percentages = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         const percent = percentageOfWorld1(arr[i]);
// //         percentages.push(percent);
// //     }
// //     return percentages;
// // };
// // console.log(populationPercentages(populations));
// // 6.5

// let tempGirls = Array(8).fill("girl", 0);
// // console.log(tempGirls);
// let abc = Array(100).fill({ 'boy': "aaa" })
// // console.log(abc);
// const arr1 = Array.from(Array(101).keys())
// // console.log(arr1);
// const numArr = Array.from({ length: 100 }, (_, i) => i + 1);
// // console.log(numArr);
// const obj1 = { name: "aaa", age: "15" };
// // console.log(Object.keys(obj1));
// const arr2 = ["a", "b", "c"];
// // const obj2 = Object.assign({ ggg: 5 }, arr2);
// const obj2 = { ...arr2 };
// // console.log(obj2);
// const arr3 = Array.isArray({ foo: 123 });
// // console.log(arr3);
// const myArr1 = [10, 11, 12, 13, 14];
// const copyArr = myArr1.slice();
// // console.log(copyArr);
// const myArr2 = [1, 2, 3, 4, 5, 6];
// const copyArr2 = myArr2;
// copyArr2[0] = 5;
// // console.log('myArr2', myArr2);
// // console.log('copyArr2', copyArr2);
// copyArr[0] = 99;
// console.log('copyArr', copyArr);
// console.log('myArr1', myArr1);
// const string = "The more you know, the more you know that you

// const string = "The more you know, the more you know that youdon't know";

// const bcbc = string.lastIndexOf("you");
// // console.log(bcbc);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res4 = fruits.slice(1, -2);
// const res5 = fruits.slice(1, 3);
// console.log(res4);
// console.log(res5);
console.log(fruits.splice(2, 0, "Lemon", "lll"));
console.log(fruits);

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')
// console.log(myFish);