var path = require('path');
var input = require('fs').readFileSync(path.resolve('01.1463.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var N = +input[0].trim().split(" ")[0];
var d = [];

d[1] = 0;

for (var ix = 2; ix <= N + 1; ix++) {
    // console.log(ix);
    d[ix] = d[ix - 1] + 1;
    if (ix % 2 === 0 && d[ix] > d[ix / 2] + 1) {
        d[ix] = d[ix / 2] + 1;
        // d[ix] = Math.min(d[ix] ,d[ix / 2] + 1);
    }
    if (ix % 3 === 0 && d[ix] > d[ix / 3] + 1) {
        // d[ix] = Math.min(d[ix],d[ix / 3] + 1);
        d[ix] = d[ix / 3] + 1;
    }
}

// d.sort(function (a, b) {
//     return a - b;
// });
console.log(d);
console.log(d[N]);
