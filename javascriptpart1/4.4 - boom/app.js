const numberCounter = n => {
    let line='';
    console.log(n);
for (let i = 1; i <= n ; i++ ) {

    if ( i % 7 === 0 ) {
        line.concat('BOOM,')
    }
      str = str + '';
    if ( i % 7 === 0  && str.indexOf('7') > -1) {
        line.concat('boom boom');
    }
    line.concat(i+'')
    };
    console.log(line);
}

//console.log(numberCounter(70));
numberCounter(18);