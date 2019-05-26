// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('07.16194.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var total_pack = input[1].split(" ");
var d = [];
var card = [];

d[0] = 0;
for (var ix = 1; ix <= N; ix++) {
    card[ix] = +total_pack[ix - 1];
    d[ix] = 1000 * 10000;
}
// console.log(card);
for (var ix = 1; ix <= N; ix++) {
    for (var ij = 1; ij <= ix; ij++) {
        // console.log(d[ix],ix,"l", d[ix - ij], card[ij]);
        d[ix] = Math.min(d[ix], d[ix - ij] + card[ij]);
        // console.log(d[ix]);
    }
}

console.log(d[N]);