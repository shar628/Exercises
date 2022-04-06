//de 
// choose a number
// run a loop from 1 to number
// if number divided by 7 and inculde the digit 7 print boom-boom example : 77 > boom-boom
// else if number divided by 7 print boom >> 17,14 only boom 
//else print number
//   MUM   i.toString()
function boom (num) {
    let oneLine = " 1, "
    for (let i = 2 ; i < num ; i++ ) {
        if ( i % 7 === 0 && i.toString().includes('7')) {
            // console.log("boom-boom");
            // oneLine += "boom-boom , "
           oneLine = oneLine.concat("boom-boom , ")
        }  else if ( i % 7 === 0) {
            // console.log("boom ");
            // oneLine += "boom , "
            oneLine = oneLine.concat("boom , ")
        }
        else  {
            // console.log(i);
            oneLine = oneLine.concat(i + ", ")
        }
    } return oneLine ;
}
//  boom(50);
console.log(boom(50));
