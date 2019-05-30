// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('05.9465.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var row = +input[0];
var index = 1;
var d = [];
for (var ix = 0; ix < row; ix++) {
    var N = +input[index].trim();
    var inputList = input[index + 1].trim().split(" ");
    var inputList2 = input[index + 2].trim().split(" ");
    // console.log(N);
    // console.log(inputList);
    // console.log(inputList2);
    index += 3;

    d = [[0, +inputList[0], +inputList2[0]]];
    for (var iy = 1; iy < N; iy++) {
        if (!d[iy]) {
            d[iy] = [];
        }

        d[iy][0] = Math.max(d[iy - 1][0], d[iy - 1][1], d[iy - 1][2]);
        d[iy][1] = Math.max(d[iy - 1][0], d[iy - 1][2]) + (+inputList[iy]);
        d[iy][2] = Math.max(d[iy - 1][0], d[iy - 1][1]) + (+inputList2[iy]);
    }
    console.log(Math.max(d[N - 1][0], d[N - 1][1], d[N - 1][2]));
    d = [];
}
