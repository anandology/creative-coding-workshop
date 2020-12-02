
var n=4;
var size=100;
for(var i=0; i<n; i++) {
  for (var j=0; j<=i; j++) {
    var x = width-(j*size+size/2);
    var y = i*size+size/2;
    circle(x, y, size)
  }
}