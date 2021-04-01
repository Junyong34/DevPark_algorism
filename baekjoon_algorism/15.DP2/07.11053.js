// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('07.11053.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var d = [];
var a = [];

for(var ix = 0; ix < N; ix++){
    a[ix] = +input[1].trim().split(" ")[ix];
}
for(var ix = 0; ix < N; ix++){
    d[ix] = 1;
    for(var iy = 0; iy < ix; iy++){
        // if(a[iy] < a[ix] && d[ix] < d[iy] +1){
        if((+a[iy]) < (+a[ix])){
            d[ix] = Math.max(d[ix],d[iy] + 1);
        }
    }
}
console.log(Math.max.apply(null,d));