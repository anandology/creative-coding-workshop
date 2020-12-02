
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

function centerSquare(x, y, size) {
    rect(x-size/2, y-size/2, size, size)
}

diamond(200, 200, 400)
centerSquare(200, 200, 200);