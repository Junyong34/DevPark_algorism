var path = require('path');
var input = require('fs').readFileSync(path.resolve('02.1261.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var C = +input[0].trim().split(" ")[0];
var R = +input[0].trim().split(" ")[1];
var map = [];
var check = [];
var dist = [];
// var dx = [0, 0, -1, 1];
// var dy = [1, -1, 0, 0];

var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];

function inputdata() {
    for (var ix = 0; ix < R; ix++) {
        var info = [];
        var tmp = [];
        map.push(info);
        check.push(tmp);
        dist.push([]);
        for (var iy = 0; iy < C; iy++) {
            map[ix].push(+(input[ix + 1].substr(iy, 1)));
            check[ix].push(false);
            dist[ix].push(0);
        }
    }
}

inputdata();
var queue = new Queue();


function bfs() {

    queue.enqueue({X: 0, Y: 0, val: 0});
    // check[0][0] = true;
    dist[0][0] = 0;
    // dist[0][0] = 0;
    while (queue.getLength()) {
        var index = queue.dequeue();
        var indexX = index.X;
        var indexY = index.Y;
        var val = index.val;
        // dist[indexX][indexY] = 0;
        if (indexX === R - 1 && indexY === C - 1) {
            //     console.log(val);
            return val;
        }

        if (dist[indexX][indexY] < val) {
            continue;
        }
        for (var ix = 0; ix < 4; ix++) {
            var posX = indexX + dx[ix];
            var posY = indexY + dy[ix];
            if (posX < 0 || posY < 0 || posX >= R || posY >=C ) {
                continue;
            }

            if (dist[posX][posY] < dist[indexX][indexY] + map[posX][posY]) {
                dist[posX][posY] = dist[indexX][indexY] + map[posX][posY];
                queue.enqueue({X: posX, Y: posY, val: dist[posX][posY]});
            }
            // if (0 <= posX && posX < R && 0 <= posY && posY < C ) {

            // }
        }
    }
    // return 0;
}

bfs();
console.log(dist);
console.log(dist[R - 1][C - 1]);
// // console.timeEnd("bbb");
// // console.log(map)
// var day = -1;
//
// function print() {
//
//     for (var ix = 0; ix < N; ix++) {
//         for (var iy = 0; iy < C; iy++) {
//             if (map[ix][iy] > day) {
//                 // bfs(ix, iy, ++houseCnt, N, M);
//                 // total.push(count);
//                 day = map[ix][iy]
//             }
//             if (map[ix][iy] === 0) {
//                 day = -1;
//                 return;
//             }
//         }
//     }
// }
// print();
// if (day > 0) {
//     console.log(day - 1);
//
// } else {
//     console.log(day);
// }
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

