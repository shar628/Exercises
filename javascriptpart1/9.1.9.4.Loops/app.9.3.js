const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function same1(arg1, arg2) {
    const arr1 = []
    for (let i = 0; i < arg1.length; i++) {
        // const element = arg1[i];
        for (let j = 0; j < arg2.length; j++) {
            // const element = arg2[j];
            if (arg1[i] === arg2[j]) {
                arr1.push(arg1[i]);
            }
        }
    }
    // return arg1[];
    return arr1.length ? arr1 : false;
};
console.log(same1(food, food1));