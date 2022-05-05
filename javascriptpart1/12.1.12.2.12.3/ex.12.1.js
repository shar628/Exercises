var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];
// לעבור על המערך בעיקר על הסטטוס ,לבדוק אם הוא טרו,
//  אם כן לקחת את הנתונים שלו,
//  לחשוב אולי לתת שמות לאובייקטים של המערך כדי לגשת אליהם בקלות 
// const Book1 = function book2(params) {
//     library.forEach(readingStatus === 1)
//     console.log("ddd");
// }
// console.log(library.author);
function book3(library) {
    return library
        .filter((i) => {
            return i.readingStatus === true;
        })
        .map((i) => {
            return `${i.author},${i.title},${i.readingStatus} `
        })
}
console.log(book3(library));
