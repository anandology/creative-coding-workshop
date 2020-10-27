const paint = require('./paint.js')
const fs = require('fs')

var args = process.argv.slice(2);
var inputFile = args[0]
var outputFile = args[1]

var code = fs.readFileSync(inputFile, 'utf-8')
var svg = paint.render(code)
fs.writeFileSync(outputFile, svg)
console.log("generated", outputFile);
