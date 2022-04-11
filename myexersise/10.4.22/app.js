var string1 = "";
var object1 = { a: 'bobi', b: 2, c: 'simha' };
for (var property1 in object1) {
    string1 += object1[property1];
}
// console.log(string1);
// expected output: "123"
const sequence = ['aa', 'bb', 'cc', 'dd'];
for (var i = 0; i < sequence.length; i++) {
    // console.log(sequence[i]);
}
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 2, 'Feb', 'aaa');
// inserts at index 1
// console.log(months);

const people = ["Greg", "Mary", "Devon", "James", "James"];
people.splice(2, 1, "Elizabeth")
// console.log(people);
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function (q) {
    return q.length > 5;
});
// console.log(result);
var fruits = ['Apple', 'banana', 'grapes', 'mango', 'orange'];
/**
* Array filters items based on search criteria (query)
*/
function filterItems(qu) {
    return fruits.filter(function (el) {
        return el.toLowerCase().indexOf(qu.toLowerCase()) > -1;
    })
}
// console.log(filterItems('app')); // ['apple', 'grapes']
// console.log(filterItems('ang')); // ['banana', 'mango', 'orange']
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 43);

// console.log(found);
// expected output: 12
// const array8 = [1, 2, 3, 4, 5, 6, 7, 8];

// fill with 0 from position 2 until position 4
// console.log(array8.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
// console.log(array8.fill(5, 1));
// expected output: [1, 5, 5, 5]

// console.log(array8.fill(6));
// expected output: [6, 6, 6, 6]
// console.log(array8.fill({}, 2, 5));
// Array(3).fill(4)     
let arr9 = Array(100).fill({})
console.log(arr9);
