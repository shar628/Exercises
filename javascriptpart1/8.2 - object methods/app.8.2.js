const myCountry = {
    country: "aaa",
    capital: "bbb",
    language: "ccc",
    population: 5555,
    neighbours: ['a', 'b', 'c'],
    describe: function name(params) {
        console.log(this.country + " has " + this.population + " people");
    },
    // checkIsland: {
    // isIsland:
    //  }
    checkIsland: function (a) {
        return a.length === 0 ? true : false;
    },

};
console.log(myCountry.neighbours);
console.log(myCountry.describe());
console.log(myCountry.checkIsland(myCountry.neighbours));
