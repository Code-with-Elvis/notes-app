/* //console is the terminal
console.log('hello world');
//global object instead of window object

console.log(global);
const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

//Common Modules 
const path = require('path');
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename)); */

/*
========================
Importing Modules
========================
*/
/* const math = require('./math');
console.log(math.add(5, 10));
console.log(math.substract(5, 10));
console.log(math.multiply(5, 10));
console.log(math.divide(5, 10));

//OR

const {add, substract, divide, multiply} = require('./math')
console.log(add(2,3))
console.log(substract(7,3))
console.log(divide(9,3))
console.log(multiply(7,3))


const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(math.add(400, 200));
}).listen(4040);

const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process'); */

/* fs.readFile('./starter.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
})

process.on('uncaughtException', err => {
  console.error ('There was an uncaught error: ${err}');
  process.exit(1);
})
 */

let path = require('path');
let fs = require('fs');

// Write the file
fs.writeFile(path.join(__dirname, 'file', 'hello.txt'), 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

const rs = fs.createReadStream('./text.txt', {encoding: 'utf-8'});
const ws = fs.WriteStream('./file/new-text')

rs.pipe(ws);