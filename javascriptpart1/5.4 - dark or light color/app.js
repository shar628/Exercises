function checkColor(color) {
    let arrr11 = checkColor()
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            console.log('light    jfjf');
            return 'light color';
        // // break;
        case "blue":
        case 'purple':
        case 'brown':
            console.log('dark color');
            return 'dark color';

        // // break;
        default:
            console.log('');
            return 'Unknown color';
        // // break;
    }
}
// let color1 =
('blue');
// console.log(checkColor);
console.log(checkColor(blue));