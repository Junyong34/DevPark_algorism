// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('01.2178.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var M = +input[0].trim().split(" ")[1];
var map = [];
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];
var check = [];

function inputdata() {
    for (var ix = 0; ix < N; ix++) {
        var info = [];
        var tmp = []
        map.push(info);
        check.push(tmp);
        for (var iy = 0; iy < M; iy++) {
            map[ix].push(+(input[ix + 1].substr(iy, 1)));
            check[ix].push(0);
        }
    }
}

inputdata();
// console.log(map);
// console.log("=================================")
function bfs(x, y) {
    var queue = [];
    check[x][y] = 1;
    queue.push({X: x, Y: y});
    while (queue.length) {
        var index = queue.shift();
        var indexX = index.X;
        var indexY = index.Y;

        for (var ix = 0; ix < 4; ix++) {
            var posX = indexX + dx[ix];
            var posY = indexY + dy[ix];
            if (0 <= posX && posX < N && 0 <= posY && posY < M) {
                if (map[posX][posY] === 1 && check[posX][posY] === 0) {
                    check[posX][posY] = check[indexX][indexY] + 1 ;
                    queue.push({X: posX, Y: posY});
                }else if(check[posX][posY] === 0){
                    check[posX][posY] = -1;
                }
            }
        }
    }
}

bfs(0,0);
console.log(check[N-1][M-1]);
