// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('01.2206.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var R = +input[0].trim().split(" ")[0];
var C = +input[0].trim().split(" ")[1];
var map = [];
var check = []
var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];

function inputdata() {
    for (var ix = 0; ix < R; ix++) {
        var info = [];
        var tmp = []
        map.push(info);
        check.push(tmp);
        for (var iy = 0; iy < C; iy++) {
            map[ix].push(+(input[ix + 1].substr(iy, 1)));
            check[ix].push([]);
        }
    }
}

inputdata();
var queue = new Queue();

//
function bfs() {

    queue.enqueue({X: 0, Y: 0, Z: 0});
    check[0][0][0] = 1;

    while (queue.getLength()) {
        var index = queue.dequeue();
        var x = index.X;
        var y = index.Y;
        var z = index.Z;
        for (var ix = 0; ix < 4; ix++) {
            var nx = x + dx[ix];
            var ny = y + dy[ix];
            // if (nx < 0 || ny < 0 || nx >= C || ny >= R) continue;
            if (nx >= 0 && nx < R && ny >= 0 && ny < C) {

                if (!map[nx][ny] && !check[nx][ny][z]) {
                    check[nx][ny][z] = check[x][y][z] + 1;
                    queue.enqueue({X: nx, Y: ny, Z: z});
                }
                // console.log(map[nx][ny])
                if (!z && map[nx][ny] && !check[nx][ny][z + 1]) {
                    check[nx][ny][z + 1] = check[x][y][z] + 1;
                    queue.enqueue({X: nx, Y: ny, Z: z + 1});
                }
            }
            // if (posX < 0 || posY < 0 || posX >= R || posY >= C) continue;
            // if (check[posX][posY]) continue;
            // check[posX][posY] = 1;
            // map[posX][posY] = map[indexX][indexY] + 1;
            // queue.enqueue({X: posX, Y: posY, VAL: val + (map[posX][posY] === 1 ? 1: 0 )});
        }
    }
    if (check[R - 1][C - 1][0] && check[R - 1][C - 1][1]) {
        return console.log(Math.min(check[R - 1][C - 1][0] || 0, check[R - 1][C - 1][1]))
    } else if (check[R - 1][C - 1][0]) {
        return console.log(+(check[R - 1][C - 1][0]));
    } else if (check[R - 1][C - 1][1]) {
        return console.log(+(check[R - 1][C - 1][1]));
    } else {
        return console.log(-1);
    }
}

bfs();

function Queue() {
    var queue = [];
    var offset = 0;

    this.getLength = function () {
        return (queue.length - offset);
    }

    this.enqueue = function (item) {
        queue.push(item);
    }
    this.dequeue = function () {
        if (!queue.length) {
            return undefined;
        }

        var item = queue[offset];

        if ((++offset) * 2 >= queue.length) {
            queue = queue.slice(offset);
            offset = 0;
        }

        return item;
    }
}

