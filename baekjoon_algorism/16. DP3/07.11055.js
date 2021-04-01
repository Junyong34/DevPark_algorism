// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('07.11055.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var arr  = [];
var d = [];

for(var ix = 0; ix < N; ix++){
    arr[ix] = +input[1].trim().split(" ")[ix];
}

for (var ix = 0; ix < N; ix++) {
    d[ix] = arr[ix];
    for (var iy = 0; iy < ix; iy++) {
        if (arr[iy] < arr[ix] && d[ix] < d[iy] + arr[ix]) {
            d[ix] = d[iy] + arr[ix];
        }
    }
}

console.log(Math.max.apply(null, d));