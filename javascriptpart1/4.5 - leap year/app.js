// create f with number 
// if number is leap 
// divide 4 yes , divide 100 no but  divide 400 yes  

function leapYear (num) {
    if ( num % 4 === 0  && ( num % 100 !== 0 || num % 400 === 0 )) {
        console.log( "It is indeed a  leap year");
    } else {
        console.log("This is not a leap year.");
    }
}
leapYear(2012);
// leapYear(2013);
leapYear(400);
// console.log(leapYear(2012));