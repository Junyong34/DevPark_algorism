// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('04.9095.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var list = +input[0].trim().split(" ")[0];


var d = [];
var result = [];
d[0] = 1;
d[1] = 1;
d[2] = 2;

for (var ix = 0; ix < list; ix++) {
    var N = +input[ix + 1];
    for (var iy = 3; iy <= N; iy++) {
        d[iy] = (+d[iy - 1] + +d[iy - 2] + +d[iy - 3]);
    }
    result.push(d[N]);
}
console.log(result.join("\n"));
