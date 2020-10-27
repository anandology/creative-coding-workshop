
function bottomCircle(bx, by, d) {
    var cx = bx;
    var cy = by-d/2;
    circle(cx, cy, d);
}
var x = 200;
var y = 350;
var d = 100;

bottomCircle(x, y, d);
bottomCircle(x, y, 2*d);
bottomCircle(x, y, 3*d);