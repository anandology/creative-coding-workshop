function drawGrid(n) {
  var size = width/n;

  for (var i=0; i<n; i++) {
    for (var j=0; j<n; j++) {
      var x = j*size+size/2;
      var y = i*size + size/2;
      if ((i*n+j)%3!=2) {
        circle(x, y, size)
      }
      else {
        squareWithCenter(x, y, size)
      }
    }
  }
}

function squareWithCenter(x, y, size) {
  rect(x-size/2, y-size/2, size, size)
}

function diamond(x, y, size) {
  line(x-size/2, y, x, y-size/2)
  line(x, y-size/2, x+size/2, y)
  line(x+size/2, y, x, y+size/2)
  line(x, y+size/2, x-size/2, y)
}

push();
fill('white');
stroke('white');
rect(0, 0, width, height);
pop();

drawGrid(4)