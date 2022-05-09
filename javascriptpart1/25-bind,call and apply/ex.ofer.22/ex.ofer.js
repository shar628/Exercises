// window.onload = function () {
//     declareEvents();
// };

function declareEvents() {
    let btn1 = document.querySelector('#btn1')
    let btn2 = document.querySelector('#btn2')
    let btn3 = document.querySelector('#btn3')

    // btn1.addEventListener("click", function () {
    //     // alert(btn1.dataset.heb)
    //     alert(btn1.dataset["heb"]);
    // });
    btn1.addEventListener("click", showHeb)
    btn2.addEventListener("click", showHeb)
    btn3.addEventListener("click", showHeb)
}
// btn1.addEventListener("click", function () {
//     // alert(btn1.dataset(["heb"]));
//     alert(btn1.dataset.heb);
// })
// btn2.addEventListener("click", function () {
//     alert(btn2.dataset.heb);
// })
function showHeb(e) {
    console.log(e.target.dataset['heb']);
    alert(e.target.dataset.heb)
}
// showHeb();
// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
    // evt.target refers to the clicked <li> element
    // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
    evt.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);



const colors = ['red', 'blue', 'brown', 'bisque', 'aqua', 'green', 'yellow', 'orange', 'black', 'gold', 'grey'];
const idx = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[idx];

var timeOutId = setTimeout(
    function () {
        alert('2')
    }, 3000
)
function cancelTimeout() {
    // console.log('time-=', timeoutid);
    clearTimeout(timeOutId)
}
let numbers = [1, 2, 3, 4];
const sum = (x, y, z) => {
    console.log(x, y, z);
    return x + y + z;
};
sum(...numbers)
console.log(sum(numbers));

const greetingFunc = greetingText => console.log(`Hi ${greetingText}`);

const greetingInfoFunc = (name, dayTime, callbackFunc) => {
    const greetingText = `${name}, Good ${dayTime}!`;
    callbackFunc(greetingText);
}

greetingInfoFunc('Shaul', 'Night', greetingFunc);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello from promise #1');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello from promise #2');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello from promise #3');
    }, 3000);
});
promise1
    .then(res => console.log(res))
    .catch(err => {
        console.log(err);
    });

promise2
    .then(res => console.log(res))
    .catch(err => {
        console.log(err);
    });

promise3
    .then(res => console.log(res))
    .catch(err => {
        console.log(err);
    });
Promise.all([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => {
        console.log(err);
    });
