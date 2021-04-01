// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('02.10844.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// console.time("aaa");
var N = +input[0];
var div = 1000000000;
var d = [[], [0], [], [], [], [], [], [], []];
var result = 0;

for (var ix = 1; ix <= 9; ix++) {
    d[1][ix] = 1;
}
for (var ix = 2; ix <= N; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }
    for (var iy = 0; iy <= 9; iy++) {
        // d[ix][iy] = 0;
        d[ix][iy] = 0;
        if (iy - 1 >= 0) d[ix][iy] += d[ix - 1][iy - 1];
        if (iy + 1 <= 9) d[ix][iy] += d[ix - 1][iy + 1];
        d[ix][iy] = d[ix][iy] % div;

    }
}



for (var ix = 0; ix <= 9; ix++) {
    // console.log(d);
    result += +d[N][ix];
}

console.log(result % div);
