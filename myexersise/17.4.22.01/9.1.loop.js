const listOfNeighbours1 = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let row1 of listOfNeighbours1) {
    for (let country of row1) {
        console.log(`Neighbour: ${country}`);
    }
}


const listOfNeighbours2 = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours2.length; i++) {
    for (let j = 0; j < listOfNeighbours2[i].length; j++) {
        console.log("neighbor ::" + listOfNeighbours2[i][j]);
    }
}
