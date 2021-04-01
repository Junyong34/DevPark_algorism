// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('02.3055.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//

var R = +input[0].trim().split(" ")[0];
var C = +input[0].trim().split(" ")[1];
var map = [];
var result = 'KAKTUS';
var water = [];
var move = [];
var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];
var water_q = [];
var home;
var animal;

function inputdata() {
    for (var ix = 0; ix < R; ix++) {
        var inputVal = (input[ix + 1]);
        map.push([]);
        water.push([]);
        move.push([]);
        for (var iy = 0; iy < C; iy++) {
            map[ix].push((inputVal.substr(iy, 1)));
            water[ix].push(0);
            move[ix].push(0);

            if (inputVal.substr(iy, 1) === '*') {
                water_q.push({X: ix, Y: iy});
            }
            if (inputVal.substr(iy, 1) === 'S') {
                animal = {X: ix, Y: iy};
            }
            if (inputVal.substr(iy, 1) === 'D') {
                home = {X: ix, Y: iy};
            }
        }
    }
}

inputdata();

// console.log(water_q);
// console.log(water);
// console.log(move);
var q_index = 0;

function water_time_bfs(){

// 물시간부터 계산
while (water_q.length > q_index) {
    var index = water_q[q_index];
    var indexX = index.X;
    var indexY = index.Y;

    for (var ix = 0; ix < 4; ix++) {
        var nx = indexX + dy[ix];
        var ny = indexY + dx[ix];
        if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
            if (!water[nx][ny] && map[nx][ny] === '.') {
                water[nx][ny] = water[indexX][indexY] + 1;
                water_q.push({X: nx, Y: ny});
            }
        }
    }
    q_index++;
}
}

function bfs() {

    var q = [];
    q_index = 0;

    q.push(animal);

    while (q.length > q_index) {
        var index = q[q_index];
        var indexX = index.X;
        var indexY = index.Y;
        for (var ix = 0; ix < 4; ix++) {
            var nx = indexX + dy[ix];
            var ny = indexY + dx[ix];

            if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
                if (move[nx][ny] === 0 && (map[nx][ny] === '.' || map[nx][ny] === 'D')) {
                    if (water[nx][ny] === 0) {
                        move[nx][ny] = move[indexX][indexY] + 1;
                        q.push({X: nx, Y: ny});
                    } else {
                        if (water[nx][ny] > move[indexX][indexY] + 1) {
                            move[nx][ny] = move[indexX][indexY] + 1;
                            q.push({X: nx, Y: ny});
                        }
                    }
                }
            }
        }
        q_index++;
    }
}
water_time_bfs();
bfs();
if (move[home.X][home.Y] !== 0) {
    console.log(move[home.X][home.Y]);
} else {
    console.log(result);
}

