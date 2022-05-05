let squareSize = 150;
let lineWidth = 4;
function setup() {
    createCanvas(400, 300);
    function draw() {
        background(100);
        rectMode(CENTER);
        strokeWeight(lineWidth);
        stroke(0, 0, 255);
        fill(0, 255, 0);
        square(200, 150, squareSize);
    }