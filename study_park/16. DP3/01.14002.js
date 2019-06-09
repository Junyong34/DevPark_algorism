// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('01.14002.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var arr = input[1].trim().split(" ");
var d = [];
var v = [];
var res = [];

var go = function (index) {
    if(index === -1){
        return;
    }
    go(v[index]);
    res.push(+arr[index]);
};

for (var ix = 0; ix < N; ix++) {
    d[ix] = 1;
    v[ix] = -1;
    for (var jy = 0; jy < ix; jy++) {
        if (+arr[jy] < +arr[ix] && d[ix] < d[jy] + 1) {
            d[ix] = d[jy] + 1;
            v[ix] = jy;
        }
    }
}

var ans = 0;

for (var ix = 0; ix < N; ix++) {
    ans = Math.max(ans, d[ix]);
}

console.log(ans);

for (var ix = 0; ix < N; ix++) {
    if(d[ix] === ans){
        res.push(+arr[ix]);
        go(v[ix]);
        break;
    }
}
res.sort(function(a,b) {
    return a- b;
});
console.log(res.join(' '));
// for (var ix = 0; ix < res.length; ix++) {
//     console.log(res[ix]);
// }
