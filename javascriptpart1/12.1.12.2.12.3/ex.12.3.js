const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson: function (type, id1) {
        if (type === "teacher") {
            return this.teachers.find((e) => {
                return id1 === e.id
                // if (id1 === e.id) {
                //     return true
                // } else {
                //     return false
                // }
            })
        }
    }
}
console.log(school.findPerson("teacher", 2));

