// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('03.11054.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
// var arr = input[1].trim().split(" ");
var d = [];
var reverseD = [];
var arr = [];

for(var ix = 0; ix < N; ix++){
    arr[ix] = +input[1].trim().split(" ")[ix];
}
for (var ix = 0; ix < N; ix++) {
    d[ix] = 1;
    for (var jy = 0; jy < ix; jy++) {
        if (+arr[jy] < +arr[ix] && d[ix] < d[jy] + 1) {
            d[ix] = d[jy] + 1;
        }
    }
}

arr.reverse();
for (var ix = 0; ix < N; ix++) {
    reverseD[ix] = 1;
    for (var jy = 0; jy < ix; jy++) {
        if (+arr[jy] < +arr[ix] && reverseD[ix] < reverseD[jy] + 1) {
            reverseD[ix] = reverseD[jy] + 1;
        }
    }
}
//
// console.log(d)
// console.log(reverseD)
var ans = 0;
var dIndex = d.length;
for (var ix = 0; ix < N; ix++) {
    dIndex -= 1;
    if (ans < d[ix] + reverseD[dIndex] - 1) {
        ans = d[ix] + reverseD[dIndex] - 1;
    }
}

console.log(ans);





