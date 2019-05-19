// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('02.7576.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var M = +input[0].trim().split(" ")[0];
var N = +input[0].trim().split(" ")[1];
var map = [];
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];

function inputdata() {
    for (var ix = 0; ix < N; ix++) {
        var info = [];
        var datas = (input[ix + 1].split(" "));
        map.push(info);
        for (var iy = 0; iy < M; iy++) {
            if (+datas[iy] === 1) {
                queue.enqueue({X: ix, Y: iy});
            }
            map[ix].push(+datas[iy]);
        }
    }
}
var queue = new Queue();
// console.time("aaa")
inputdata();
// console.timeEnd("aaa")
// console.time("bbb")
while (queue.getLength()) {
    var index = queue.dequeue();
    var indexX = index.X;
    var indexY = index.Y;

    for (var ix = 0; ix < 4; ix++) {
        var posX = indexX + dx[ix];
        var posY = indexY + dy[ix];
        if (0 <= posX && posX < N && 0 <= posY && posY < M) {
            if (map[posX][posY] === 0) {
                map[posX][posY] = map[indexX][indexY] + 1;
                queue.enqueue({X: posX, Y: posY});
            }
        }
    }
}
// console.timeEnd("bbb");
// console.log(map)
var day = -1;

function print() {

    for (var ix = 0; ix < N; ix++) {
        for (var iy = 0; iy < M; iy++) {
            if (map[ix][iy] > day) {
                // bfs(ix, iy, ++houseCnt, N, M);
                // total.push(count);
                day = map[ix][iy]
            }
            if (map[ix][iy] === 0) {
                day = -1;
                return;
            }
        }
    }
}
print();
if (day > 0) {
    console.log(day - 1);

} else {
    console.log(day);
}
// console.log(check);
// console.log("=================================")
// function bfs(x, y) {
//     var queue = new Queue();
//     check[x][y] = 1;
//     queue.enqueue({X: x, Y: y});

// }
//
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

