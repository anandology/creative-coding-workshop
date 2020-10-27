
function bottomCircle(bx, by, d) {
    var cx = bx;
    var cy = by-d/2;
    circle(cx, cy, d);
}
function bottomCircles(x, y, d) {
    bottomCircle(x, y, d);
    bottomCircle(x, y, 2*d);
    bottomCircle(x, y, 3*d);
}

bottomCircles(125, 250, 50)
bottomCircles(275, 250, 50)
