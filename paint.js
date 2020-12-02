
var objects = [];
var width = 400;
var height = 400;

var stack = [];

var style = {
  stroke: 'black',
  strokeWeight: null,
  fill: 'none'
}

function push() {
  stack.push(style);
  reset();
}

function pop() {
  style = stack.pop();
}

function stroke(color) {
  style.stroke = color;
}
function strokeWeight(weight) {
  style.strokeWeight = weight;
}

function fill(color) {
  style.fill = color;
}

function clear() {
  this.objects = [];
}

function reset() {
  clear();
  style = {
    stroke: 'black',
    fill: 'none',
    strokeWeight: null
  }
}

function addObject(tag, attrs) {
  attrs.fill = attrs.fill || style.fill;
  attrs.stroke = attrs.stroke || style.stroke;
  if (style.strokeWeight !== null) {
    attrs["stroke-width"] = attrs["stroke-width"] || style.strokeWeight;
  }
  objects.push({tag: tag, attrs: attrs});
}

function line(x1, y1, x2, y2) {
  addObject('line', {x1: x1, y1: y1, x2: x2, y2: y2})
}

function circle(x, y, d) {
  addObject('circle', {cx: x, cy: y, r: d/2})
}

function dot(x, y) {
  addObject('circle', {cx: x, cy: y, r: 5, fill: 'black'})
}

function rect(x, y, w, h) {
  addObject("rect", {"x": x, "y": y, "width": w, "height": h});
}

// returns a random number between 0 and n-1
function random(n) {
  if (n === undefined) {
    n = 1;
  }
  return n * Math.random()
}

function drawGrid() {
  stroke('#ddd')
  for (var x=0; x<=width; x+=50) {
    line(x, 0, x, height);
  }
  for (var y=0; y<=height; y+=50) {
    line(0, y, width, y);
  }
  stroke('black')
}

function renderObject(obj) {
  return (
    "    <"
    + obj.tag + " "
    + Object.entries(obj.attrs).map(kv => kv[0] + '="' + kv[1] + '"').join(" ")) + " "
    + "/>";
}

function renderSVG() {
  var head = `<svg version="1.1" viewBox="-5 -5 WIDTH HEIGHT"
  baseProfile="full"
  width="WIDTH" height="HEIGHT"
  xmlns="http://www.w3.org/2000/svg">\n`
  .replace(/WIDTH/g, width + 10)
  .replace(/HEIGHT/g, height + 10);

  var tail = `\n</svg>`;

  var body = objects.map(renderObject).join("\n")
  return head + body + tail;
}

function render(code) {
  reset();
  drawGrid();
  eval(code);
  return renderSVG();
}

function canvas(width, height) {
  return {
    width: width,
    height: height,
    objects: [],
    circle: function(cx, cy, d) {
      this.addObject("circle", {"cx": cx, "cy": cy, "r": d/2, stroke: "black", fill: "none"});
    },
    rect: function(x, y, w, h) {
      this.addObject("rect", {"x": x, "y": y, "width": w, "height": h, stroke: "black", fill: "none"});
    },
    addObject: function(tag, attrs) {
      this.objects.push(
        "  <" + tag + " "
        + Object.entries(attrs).map(kv => kv[0] + '="' + kv[1] + '"').join(" ")
        + " />")
    },
    toSVG: function() {
      return `
      <svg version="1.1"
        baseProfile="full"
        width="WIDTH" height="HEIGHT"
        xmlns="http://www.w3.org/2000/svg">
      OBJECTS
      </svg>
      `
      .replace('WIDTH', this.width)
      .replace('HEIGHT', this.height)
      .replace('OBJECTS', this.objects.join("\n"));
    }
  }
}

module.exports = {
  canvas,
  circle,
  rect,
  render
}