function star(x, y, size) {
    var s = size/3;
    circle(x, y, s)
    circle(x-s, y, s)
    circle(x+s, y, s)
    circle(x, y-s, s)
    circle(x, y+s, s)
}

star(100, 200, 150)
star(200, 200, 150)
star(300, 200, 150)