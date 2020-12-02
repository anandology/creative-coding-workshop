
function drawGrid() {
}

width = 800
height = 800

stroke('white')
fill('white')
rect(0, 0, width, height)

stroke('black')
fill('none')

var x1 = 50
var y1 = 50
var x2 = 750
var y2 = 50
var step = 20

while (x2 >= x1) {
  line (x1, y1, x2, y2);
  y1 = y1 + step
  x2 = x2-step
}
