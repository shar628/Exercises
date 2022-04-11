const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
people.shift();
console.log(people);
people.pop();
console.log(people);
people.unshift('matt');
people.push('shaul');
console.log(people);
// 6
// for (let i = 0; i < people[3]; i++) {
// console.log(people[i]);
// }
// 7
console.log(people.slice(2));
console.log(people.indexOf('Mary'));
console.log(people.indexOf('foo'));
const people2 = ["Greg", "Mary", "Devon", "James"];
console.log(people2.splice(2, 1, "Artie"));
// 8 לא הצלחתי
console.log(people2.indexOf("Mary"));


const bob = ['a', 'b', 'c'];
const withBob = ['d', 'e', 'f'];
const withBob2 = bob.concat(withBob);
// console.log(withBob2);