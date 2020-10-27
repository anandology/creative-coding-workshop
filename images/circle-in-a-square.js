
function circleInSquare(x, y, size) {
    rect(x, y, size, size)
    circle(x+size/2, y+size/2, size)
}

circleInSquare(100, 100, 200)