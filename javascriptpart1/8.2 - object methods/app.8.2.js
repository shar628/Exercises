const myCountry = {
    country: "aaa",
    capital: "bbb",
    language: "ccc",
    population: 5555,
    neighbours: ['a', 'b', 'c', 'd'],
    describe: function name(params) {
        console.log(`${this.country} has   ${this.population}  many people`);
    },

    // checkIsland: {
    // isIsland:
    //  }
    checkIsland: function (par1) {
        return par1.length === 0 ? true : false;
    },
    checkIsland2: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }

};
console.log(myCountry.neighbours);
myCountry.describe();
console.log(myCountry.checkIsland(myCountry.neighbours));
console.log(myCountry.checkIsland2(myCountry.neighbours));

// answer to number 3
// myCountry.describe();