let tableHtmlString = '<table>';
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    tableHtmlString += '<tr>';
    for (let j = 0; j < numbers.length; j++) {
        let value = numbers[j] * numbers[i];
        tableHtmlString += '<td>' + value + '</td>';
    }
    tableHtmlString += '</tr>';
}

tableHtmlString += '</table>';

document.body.innerHTML = tableHtmlString;
const aekol10 =  for(let i = 1 ; i < 10 ; i++) {

}