numberCounter = n => {
    for ( i = 0 ; i <= n ; i++ ) {
        console.log(i);
    }
    if ( n % 7 === 0 ) {
        console.log('boom');
    }
    if ( n % 7 === 0 ) && (n.include(7) ) {
        console.log('boom boom');
    }
    };
    numberCounter (70);