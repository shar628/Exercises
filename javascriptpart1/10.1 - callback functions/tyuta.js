

const myObj = { firstName: 'Henry', lastName: 'Williams' };
// console.log('myObj', Object.values(myObj));

let arr1 = [4, 5, 8, 's', 'a', 'w'];
// console.log(arr1);
arr1.push('q');
// console.log(arr1);
arr1.unshift('sh');
let sera = arr1.indexOf('a');
let del_ar = arr1.splice(sera, 1)
console.log(arr1);
console.log(del_ar);

window.onload = function () {
    console.log('Hello 5.5.22 10:41');
    console.log(del_ar);
    document.querySelector('#id_h3').innerHTML = arr1;
}