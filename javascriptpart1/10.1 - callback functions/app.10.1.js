const isString = function (str, callback) {
    if (typeof str === "string") {
        callback(str);
    }
}
function callback2(str4) {
    // console.log(str4);
};

// isString("shaul", callback2);
// isString("5555", callback2);
// isString(5555, callback2);
// 2.
// let str5 = "who is the big?"
const firstWordUpperCase = function (string1, callback1) {
    let arr1 = string1.split(" ");
    arr1[0] = arr1[0].toUpperCase();
    callback1(arr1.join(" "));
    console.log(arr1);
};
// firstWordUpperCase(str5, callback2)
const addDash = (string1) => {
    let str3 = "";
}

// from free code camp
function createQuote(quote, callback) {
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}

function logQuote(ar) {
    console.log(ar);
}

// createQuote("eat your vegetables!", logQuote); // 1

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
// console.log(fun4(20, fun5));
// fun4(25, fun5);

// ========

let str9 = ' i love isreal';
let func1 = (str, callback5) => {
    const [fir, ...rest] = str.split(" ");
    const res1 = [fir.toUpperCase(), ...rest].join(" ");
    if (typeof callback5 === "function") {
        return callback5(res1);
    } else {
        return;
    }
};
const str8 = (s) => {
    return s.split(" ").join("-");
}
const str7 = (st) => {
    return st + " $$";
}
console.log(func1(str9, str8));
console.log(func1(str9, str7));