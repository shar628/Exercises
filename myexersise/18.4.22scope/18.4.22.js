// // if (true) {
// //     let animal = 'cat';
// //     console.log(animal);
// // }
// // console.log(animal);
// // fab fa - 500pxfab fa - adn


// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());
// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());