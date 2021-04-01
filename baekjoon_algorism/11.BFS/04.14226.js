// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('04.14226.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var check = [];
var dist = [];

function inputdata() {
    for (var ix = 0; ix <= N; ix++) {
        var info = [];
        dist.push(info);
        for (var iy = 0; iy <= N; iy++) {
            dist[ix].push(-1);
        }
    }
}

inputdata();

//
function bfs() {
    var q = new Queue();
    q.enqueue({S: 1, C: 0});
    dist[1][0] = 0;
    while (q.getLength()) {
        var index = q.dequeue();
        var s = index.S;
        var c = index.C;

        if (dist[s][s] === -1) {
            dist[s][s] = dist[s][c] + 1;
            q.enqueue({S: s, C: s});
        }

        if (s + c <= N && dist[s + c][c] === -1) {
            dist[s + c][c] = dist[s][c] + 1;
            q.enqueue({S: s + c, C: c});
        }
        if (s - 1 >= 0 && dist[s - 1][c] === -1) {
            dist[s - 1][c] = dist[s][c] + 1;
            q.enqueue({S: s - 1, C: c});
        }

    }
}


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

bfs();
var ans = -1;

for (var ix = 0; ix <= N; ix++) {
    if (dist[N][ix] !== -1) {
        if (ans === -1 || ans > dist[N][ix]) {
            ans = dist[N][ix];
        }
    }
}

console.log(ans);
