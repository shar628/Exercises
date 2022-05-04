const repeat1 = function (n) {
    for (let i = 1; i <= n; i++) {
        // const element = n[i];
        // console.log(n);
        // console.log('#'.repeat(i));
        // console.log(n - i);
        console.log('#'.repeat(i) + ' '.repeat(n - i) + "'");

    }
}
// repeat1(8)

// const repeat2 = function (n) {
//     for (let i = 0; i <= n; i++) {
//         // const element = array[i];
//         let add1 = '';
//         for (let j = 0; j < n; j++) {
//             // const element = array[j];
//             if (i > j) {
//                 add1 += '#';
//             } else {
//                 add1 += ' ';
//             }
//         }
//         console.log(add1);

//     }
// }
// console.log(repeat2(5));