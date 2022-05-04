const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    // const element = array[i];
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        // const element = array[j];
        // console.log(`Neighbours : ${j}`);
        console.log(`Neighbours : ${listOfNeighbours[i][j]} `);
    }
}