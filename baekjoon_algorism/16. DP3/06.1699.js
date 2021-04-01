// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('06.1699.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var d = [];

for (var ix = 0; ix <= N; ix++ ){
    d[ix] = ix;
    for(var iy = 1; iy * iy <= ix; iy++) {
        if (d[ix] > d[ix - (iy * iy)] + 1) {
            // console.log(d[ix] = d[ix - (iy * iy)] + 1);
            d[ix] = d[ix - (iy * iy)] + 1;
        }
    }
}

console.log(d[N]);