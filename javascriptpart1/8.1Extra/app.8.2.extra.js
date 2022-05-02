//8.2 extra to submit

const obj1 = {};
const obj2 = new Map();
// set and get

const maxCount = 1000000;

console.time("regular");

for (let i = 0; i < maxCount; i++) {
    //Perform the operation to be measured multiple times
    obj1[i] = i * 2;
}

console.timeEnd("regular"); // <---- Stops the time

// ==================================================
console.time("MAP");

for (let i = 0; i < maxCount; i++) {
    //Perform the operation to be measured multiple times
    obj2.set(i, i * 2);
}

// ===========================================================
console.time("regular find");

console.log(obj1[900000]);

console.timeEnd("regular find"); // <---- Stops the time

// ==================================================
console.time("MAP find");

console.log(obj2.get(900000));

console.timeEnd("MAP find"); // <---- Stops the time

// console.log(obj1);