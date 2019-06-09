// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('02.11722.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
// var arr = input[1].trim().split(" ");
var d = [];
var arr = [];
for(var ix = 0; ix < N; ix++){
    arr[ix] = +input[1].trim().split(" ")[ix];
}
arr.reverse();
for (var ix = 0; ix < N; ix++) {
    d[ix] = 1;
    for (var jy = 0; jy < ix; jy++) {
        if (+arr[jy] < +arr[ix] && d[ix] < d[jy] + 1) {
            d[ix] = d[jy] + 1;
        }
    }
}

console.log(Math.max.apply(null, d));