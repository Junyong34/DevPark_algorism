// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('01.15990.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// console.time("aaa");
var list = +input[0].trim().split(" ")[0];
var div = 1000000009;
var d = [[0, 0, 0],[1, 0, 0], [0, 1, 0],[1, 1, 1]];


for (var iy = 4; iy <= 100000; iy++) {
    if (!d[iy]) {
        d.push([]);
    }
    d[iy][0] = (+d[iy - 1][1] + +d[iy - 1][2]) % div;
    d[iy][1] = (+d[iy - 2][0] + +d[iy - 2][2]) % div;
    d[iy][2] = (+d[iy - 3][0] + +d[iy - 3][1]) % div;

}

for (var ix = 0; ix < list; ix++) {
    var N = +input[ix + 1];
    console.log((d[N][0] + d[N][1] + d[N][2] % div) % div);
}

// function way(N) {
//
//     for (var iy = 4; iy <= N; iy++) {
//         // d[iy][0] = (+d[iy - 1][1] + +d[iy - 1][2]) % div;
//         d[0][iy] = (+d[1][iy - 1] + +d[2][iy - 1]) % div;
//         // d[iy][1] = (+d[iy - 2][0] + +d[iy - 2][2]) % div;
//         d[1][iy] = (+d[0][iy - 2] + +d[2][iy - 2]) % div;
//         // d[iy][2] = (+d[iy - 3][0] + +d[iy - 3][1]) % div;
//         d[2][iy] = (+d[0][iy - 3] + +d[1][iy - 3]) % div;
//     }
//     // result.push(d[N][1] + d[N][2] + d[N][3]);
//     // result.push(d[N][0] + d[N][1] + d[N][2]);
//     result.push(d[0][N] + d[1][N] + d[2][N]);
//
// }


// console.timeEnd("aaa");