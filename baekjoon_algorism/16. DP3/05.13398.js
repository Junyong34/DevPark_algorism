// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('05.13398.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var arr = input[1].trim().split(" ");
var leftD = [];
var rightD = [];


leftD[0] = +arr[0];
for (var ix = 1; ix < N; ix++) {
    if (leftD[ix - 1] + +arr[ix] > +arr[ix]) {
        leftD[ix] = leftD[ix - 1] + +arr[ix];
    } else {
        leftD[ix] = +arr[ix];
    }
}

// arr.reverse();
rightD[N - 1] = +arr[N - 1];
for (ix = N - 2; ix >= 0; ix--) {
    if (rightD[ix + 1] + +arr[ix] > +arr[ix]) {
        rightD[ix] = rightD[ix + 1] + +arr[ix];
    } else {
        rightD[ix] = +arr[ix];
    }
}

var ans;
// console.log(leftD);
// console.log(rightD);

ans = Math.max.apply(null, leftD);
for (ix = 1; ix < N - 1; ix++) {
    if (ans < leftD[ix - 1] + rightD[ix + 1]) {
        ans = leftD[ix - 1] + rightD[ix + 1];
    }
}

console.log(ans);
