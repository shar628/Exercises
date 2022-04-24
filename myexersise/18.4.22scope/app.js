// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b)


// function funcC() {
//     console.log("1");
// }
// funcC();
// function funcC() {
//     console.log("2");
// }
// funcC();

// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//     var e = 2;
// }
// funcD2();
// console.log(e);
// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;



// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();
// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);
// function funcC() {
//     console.log("1");
// }
// funcC();
// function funcC() {
//     console.log("2");
// }
// funcC();


// let i;
for (let i = 0; i < 8; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}