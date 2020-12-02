function drawGrid(rows, cols, shape) {
  var w = width/cols;
  var h = height/rows;

  for (var i=0; i<rows; i++) {
    for (var j=0; j<cols; j++) {
      var x = j*w;
      var y = i*h;
      shape(x, y, w, h)
    }
  }
}

function drawShape(x, y, w, h) {
  push();
  stroke("#ddd")
  rect(x, y, w, h)
  pop();
  if (random() < 0.5) {
    line(x, y, x+w, y+h)
  }
  else {
    line(x+w, y, x, y+h)
  }
}

push();
fill('white');
stroke('white');
rect(0, 0, width, height);
pop();

drawGrid(2, 2, drawShape)