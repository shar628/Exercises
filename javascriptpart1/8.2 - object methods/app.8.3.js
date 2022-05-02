// 1. create 2 book objects with properties: name, author, year.

// 2. create an empty object bookUtils(utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
//     which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

const book1 = { Name: "John", book: "Doe", year: 50, };
const book2 = { Name: "asdf", book: "qwe", year: 40, };
let bookUtils = {}

bookUtils.getFirstPublished = function (book1, book2) {
    return book1.year <= book2.year ? book1 : book2;
}


