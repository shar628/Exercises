const obj = {
    name: 'shaul',
    print() {
        console.log(this.name);
    },
    printAfterSecond() {
        setTimeout(function () {
            this.print();

        }.bind(this), 1000);


    },

};
// console.log(obj.printAfterSecond.apply(obj));
obj.printAfterSecond()