// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('06.2156.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = input.slice();
N.shift();
var d = [[0, +N[0], 0]];

for (var ix = 1; ix < N.length; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }

    d[ix][0] = Math.max(d[ix - 1][0], d[ix - 1][1], d[ix - 1][2]);
    d[ix][1] = d[ix - 1][0] + (+N[ix]);
    d[ix][2] = d[ix - 1][1] + (+N[ix]);
}
console.log(Math.max(d[+(input[0]) - 1][0], d[+(input[0]) - 1][1], d[+(input[0]) - 1][2]));
