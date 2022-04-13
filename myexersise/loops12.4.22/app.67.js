// for (let i = 12; i <= 20; i += 5) {
//     console.log(i);
// }
const word1 = "shaulSharabi";
let revers = "";
for (i = word1.length - 1; i >= 0; i--) {
    // console.log(word1[i]);
    // console.log([i]);
    revers += word1[i];
    // console.log(revers);
}
// console.log(revers);

// 9.4
// (function (n) {
//     let str = ""
//     for (let i = 0; i < n; i++) {
//         str += '#'
//         console.log(str)
//     }
// })(9)
// 9.4 מתוקן
(function (n) {
    let str = ""
    let newStr = "";
    for (let i = 0; i < n; i++) {
        str += '#'
        newStr = str
        for (let j = n - 1 - i; j > 0; j--) {
            newStr += "e"
        }
        console.log(newStr)
    }
})(9)
