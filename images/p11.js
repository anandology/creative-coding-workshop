
function magicCircle(x, y, d, fx, fy) {
    var cx = x+fx*d/2;
    var cy = y+fy*d/2;
    circle(cx, cy, d);
}
function magicCircles(x, y, d, fx, fy) {
    for (i=0.1; i<=1; i=i+0.1) {
        magicCircle(x, y, i*d, fx,fy);
    }
}

magicCircles(200, 200, 100, 0, 0)
magicCircles(200, 150, 100, 0, -1)
magicCircles(200, 250, 100, 0, 1)
magicCircles(150, 200, 100, -1, 0)
magicCircles(250, 200, 100, 1, 0)
