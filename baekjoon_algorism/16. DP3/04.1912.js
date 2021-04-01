// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('04.1912.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var arr = input[1].trim().split(" ");
var d = [];

d[0] = +arr[0];
for (var ix = 1; ix < N; ix++) {
    d[ix] = +arr[ix];
    if (d[ix] < d[ix - 1] + +arr[ix]) {
        d[ix] = d[ix - 1] + +arr[ix];
    }

}

console.log(Math.max.apply(null, d));