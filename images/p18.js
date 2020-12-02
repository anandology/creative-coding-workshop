function drawGrid(n) {
  var size = width/n;

  for (var i=0; i<n; i++) {
    for (var j=0; j<n; j++) {
      var x = j*size+size/2;
      var y = i*size + size/2;
      concentric(circle, x, y, size, i+j+1)
    }
  }
}

function concentric(shape, x, y, size, n) {
  // size of the smallest shape
  var delta = size/n;
  for (var i=n; i>0; i=i-1) {
      shape(x, y, delta*i)
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