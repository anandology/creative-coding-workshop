
var n=4;
var size=width/n;
for(var i=0; i<n; i++) {
  var offset = (width-size*(i+1))/2
  for (var j=0; j<=i; j++) {
    var x = offset + (j*size+size/2);
    var y = i*size+size/2;
    circle(x, y, size)
  }
}