const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    //your code
    for (let i = 0; i < candyStore.candies.length; i++) {
        if (candyStore.candies[i].id === id) {
            return candyStore.candies[i];
        }
    }
}
console.log(getCandy(candyStore, "as12f"));
console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
    //your code
    return getCandy(candyStore, id).price;
}
console.log(getPrice(candyStore, "as12f"));
console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price) {
    //your code
    let candy = getCandy(candyStore, id);
    if (candy) {
        candy.amount++
    } else {
        candyStore.candies.push({
            name: name,
            id: id,
            price: price,
            amount: 1,
        });
    }
}

function buy(candyStore, id) {
    //your code
    var candy = getCandy(candyStore, id);
    if (candy.amount > 0) {
        candyStore.cashRegister += candy.price;
        candy.amount--;
    }
}
