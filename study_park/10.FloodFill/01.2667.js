// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('01.2667.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var map = [];
var count = 0;
var total = [];
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];
var houseCnt = 0;
var check = [];

function inputdata() {
    for (var ix = 0; ix < N; ix++) {
        var info = [];
        var tmp = []
        map.push(info);
        check.push(tmp);
        for (var iy = 0; iy < N; iy++) {
            map[ix].push(+(input[ix + 1].substr(iy, 1)));
            check[ix].push(0);
        }
    }
}

inputdata();

function bfs(x, y, cnt) {
    var queue = [];
    var temp = [];
    check[x][y] = cnt;
    queue.push({X: x, Y: y});
    count = 0;
    count++;
    while (queue.length) {
        var index = queue.shift();
        var indexX = index.X;
        var indexY = index.Y;

        for (var ix = 0; ix < 4; ix++) {
            var posX = indexX + dx[ix];
            var posY = indexY + dy[ix];
            if (0 <= posX && posX < N && 0 <= posY && posY < N) {
                if (map[posX][posY] === 1 && check[posX][posY] === 0) {
                    check[posX][posY] = cnt;
                    count++;
                    queue.push({X: posX, Y: posY});
                }
            }
        }
    }
}

for (var ix = 0; ix < N; ix++) {
    for (var iy = 0; iy < N; iy++) {
        if (map[ix][iy] == 1 && check[ix][iy] == 0) {

            bfs(ix, iy, ++houseCnt);
            total.push(count);
        }
    }
}
total.sort(function (a ,b) {
    return a - b;
})
console.log(houseCnt);
console.log(total.join("\n"));