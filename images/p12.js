function diamond(x, y, d) {
    var x1 = x;
    var y1 = y-d/2;
    var x2 = x+d/2;
    var y2 = y;
    var x3 = x;
    var y3 = y+d/2;
    var x4 = x-d/2;
    var y4 = y;

    line(x1, y1, x2, y2)
    line(x2, y2, x3, y3)
    line(x3, y3, x4, y4)
    line(x4, y4, x1, y1)
}

function magicDiamond(x, y, d, fx, fy) {
    var cx = x+fx*d/2;
    var cy = y+fy*d/2;
    diamond(cx, cy, d);
}
function magicDiamonds(x, y, d, fx, fy) {
    for (i=0.1; i<=1; i=i+0.1) {
        magicDiamond(x, y, i*d, fx,fy);
    }
}

magicDiamonds(200, 200, 100, 0, 0)
magicDiamonds(200, 150, 100, 0, -1)
magicDiamonds(200, 250, 100, 0, 1)
magicDiamonds(150, 200, 100, -1, 0)
magicDiamonds(250, 200, 100, 1, 0)
