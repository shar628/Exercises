// const object1 = {
//     name: 'aaa',
//     age: 32
// };
// arr2 = [];
// const arr1 = [];
// arr1.fill(object1, 0, 15)
// console.log(arr1);
// console.log(arr2(100).fill({ name: 'aaa', age: 32 }));
// let arr = Array(3).fill({ name: 'aaa' })
// arr[0].hi = "hi";
// let arr9 = Array(100).fill({})
// console.log(arr9);


function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}
timeToString()
console.log(timeToString());