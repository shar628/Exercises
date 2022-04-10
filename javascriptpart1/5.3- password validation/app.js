function chekpassword('pas') {
    if (chekpassword.length >= 7) {
        console.log('strong');
    } else {
        console.log('weak');
    };
};
function chekpassword1('pas') {
    chekpassword1.length >= 7 ? console.log('strong') : console.log('weak');
};


function chekpassword2('pas') {
    chekpassword2.length > 7 ? console.log('very strong')
        : chekpassword2.length = 7 ? console.log('strong')
            : chekpassword2.length < 7 ? console.log('weak');
};