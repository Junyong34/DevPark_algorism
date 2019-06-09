// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('08.2225.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].split(' ')[0];
var K = +input[0].split(' ')[1];
var d = [];
var div  = 1000000000;

for (var ix = 0; ix <= K; ix++) {
    d[ix] = [];
    for(var iy = 0; iy <= N; iy++ ){
        d[ix][iy] = 0;
    }
}

d[0][0] = 1;
for (var ix = 1; ix <= K; ix++) {
    for (var iy = 0; iy <= N; iy++) {
        for (var iz = 0; iz <= iy; iz++) {
            d[ix][iy] += d[ix - 1][iy - iz];
            d[ix][iy] %= div;
        }
    }
}

console.log(d[K][N]);
