// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('03.11057.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var N = +input[0];
var div = 10007;
var d = [[], [], [], [], [], [], [], [], []];
var result = 0;

for (var ix = 0; ix <= 9; ix++) {
    d[1][ix] = 1;
}
for (var ix = 2; ix <= N; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }
    for (var iy = 0; iy <= 9; iy++) {
        d[ix][iy] = 0;
        for (var iz = 0; iz <= iy; iz++) {

            d[ix][iy] += d[ix -1][iz];
            d[ix][iy] %= div;
        }
    }
}



for (var ix = 0; ix <= 9; ix++) {
    // console.log(d);
    result += +d[N][ix];
}

console.log(result % div);
