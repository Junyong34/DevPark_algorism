// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('02.4963.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// var N = +input[0].trim().split(" ")[0];
var map = [];
var count = 0;
var total = [];
var dx = [0, 0, -1, 1, -1, -1, 1, 1];
var dy = [1, -1, 0, 0, -1, 1, -1, 1];
var houseCnt = 0;
var check = [];
var textCaseIndex = 0;
for (var ix = 0; ix < input.length; ix++) {
    if (ix != textCaseIndex) continue;
    var N = +input[ix].trim().split(" ")[0];
    var M = +input[ix].trim().split(" ")[1];
    map = [];
    check = [];
    if (N === 0 && M === 0) continue;
    inputdata(N, M, ix);
    textCaseIndex += M + 1
// console.log(map);
    houseCnt = 0;
    for (var ix = 0; ix < M; ix++) {
        for (var iy = 0; iy < N; iy++) {
            if (map[ix][iy] == 1 && check[ix][iy] == 0) {
                bfs(ix, iy, ++houseCnt, N, M);
                // total.push(count);
            }
        }
    }

    console.log(houseCnt);
}

function inputdata(n, m, index) {
    for (var ix = 0; ix < m; ix++) {
        var info = [];
        var tmp = []
        map.push(info);
        check.push(tmp);
        for (var iy = 0; iy < n; iy++) {
            map[ix].push(+(input[index + 1 + ix].split(" ")[iy]));
            check[ix].push(0);
        }
    }
}


function bfs(x, y, cnt, w, h) {
    var queue = [];
    check[x][y] = cnt;
    queue.push({X: x, Y: y});
    count = 0;
    count++;
    while (queue.length) {
        var index = queue.shift();
        var indexX = index.X;
        var indexY = index.Y;

        for (var ix = 0; ix < dx.length; ix++) {
            var posX = indexX + dx[ix];
            var posY = indexY + dy[ix];
            if (0 <= posX && posX < h && 0 <= posY && posY < w) {
                if (map[posX][posY] === 1 && check[posX][posY] === 0) {
                    check[posX][posY] = cnt;
                    count++;
                    queue.push({X: posX, Y: posY});
                }
            }
        }
    }
}


// total.sort(function (a ,b) {
//     return a - b;
// })
// console.log(houseCnt);
// console.log(total.join("\n"));