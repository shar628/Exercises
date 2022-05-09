const validArray = (array) => {
    console.log(array.some(el => (typeof el !== 'string')));
    return new Promise((resolve, reject) => {
        if (!array.some(el => (typeof el !== 'string'))) {
            return resolve(array);
        }
        else
            return reject("rejected:only strings allowed")
    });
}

const makeAllCaps = (arr) => arr.map(el => el.toUpperCase());
const sortWords = (arr) => arr.sort();

validArray(['samer', 'keter', 'shaul', 'amer']).then((goodArray) => {
    let result = [];

    result = makeAllCaps(goodArray);
    result = sortWords(result);
    console.log(result);
}).catch((rejected) => {
    console.log(rejected);
})


