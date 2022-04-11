const myObj = {};
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function set1(arr, obj) {
    let longWord = arr.join("").toLowerCase();

    for (letter of longWord) {
        if (!letter.includes(" "))
            obj[letter] = longWord.split(letter).length - 1;
    }
}


set1(array, myObj);
console.log(myObj);