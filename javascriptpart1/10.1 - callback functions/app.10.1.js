const isString = function (str, callback) {
    if (typeof str === "string") {
        callback(str);
    }
}
function callback2(str2) {
    console.log(str2);
};

// isString("shaul", callback2);
// isString("5555", callback2);
// isString(5555, callback2);
// 2.
const firstWordUpperCase = function (string1, callback1) {
    let arr1 = string1.split(" ");
    arr1[0] = arr1[0].toUpperCase();
    callback1(arr1.join(" "));
};
const addDash = (string1) => {
    let str3 = "";

}
// from free code camp
function createQuote(quote, callback) {
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}

function logQuote(quote) {
    console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Result in console:
// Like I always say, eat your vegetables!
function fun4(value, callback3) {
    callback3(value);
    return value
    // console.log(value);
};
function fun5(num5) {
    num5 * 3;
    return num5;
    console.log(num5);
}
console.log(fun4(20, fun5));