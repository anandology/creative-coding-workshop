
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

function star(x, y, size) {
    diamond(x, y, size)
    diamond(x, y-size, size)
    diamond(x, y+size, size)
    diamond(x-size, y, size)
    diamond(x+size, y, size)

}

star(100, 200, 50)
star(200, 200, 50)
star(300, 200, 50)