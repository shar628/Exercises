const isg = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve('it is resolve');
        } else {
            reject('it is  reject')
        }
    })
};
isg(4)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })