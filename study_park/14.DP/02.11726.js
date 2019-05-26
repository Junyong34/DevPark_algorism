// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('02.11726.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var N = +input[0].trim().split(" ")[0];
var d = [];
var div = 10007;

d[0] = 1;
d[1] = 1;

for (var ix = 2; ix <= N; ix++) {
    d[ix] = (d[ix - 1] + d[ix - 2]) % div;
}
// console.log(d);
console.log(d[N]);
