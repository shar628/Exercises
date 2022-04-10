function averageScore (arg1 ,arg2,arg3) {
    let total = arg1 + arg2 + arg3 ;
    let numberofaverage = total / 3 ;
    console.log( numberofaverage);
    return numberofaverage;
} ;
let  team1 = averageScore(89,120,103);
let team2 =  averageScore(116,94,123);
if  (team1 < team2) {
    console.log('the winner is team1' );
};
//  else ( team2 > team1) {
//     console.log('the winner is team2' );
// };
// לא הצלחתי את המשך התרגיל 