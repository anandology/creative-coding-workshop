
function leftCircle(x, y, d) {
    var cx = x + d/2;
    var cy = y;
    circle(cx, cy, d);
}
var x = 50;
var y = 200;
var d = 100;

leftCircle(x, y, d);
leftCircle(x, y, 2*d);
leftCircle(x, y, 3*d);