// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('01.13549.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var M = +input[0].trim().split(" ")[1];
var check = [];
var dist = [];
var MAX = 1000001;
for (var ix = 0; ix < MAX; ix++) {
    check[ix] = false;
    dist[ix] = 0
}

function bfs() {
    var q = new Queue();b
    var next_q = new Queue();
    q.enqueue(N);
    check[N] = true;
    dist[N] = 0;
    while (q.getLength()) {
        var now = q.dequeue();

        if (now === M) return;
        if (now * 2 < MAX) {
            if (check[now * 2] === false) {
                q.enqueue(now * 2);
                check[now * 2] = true;
                dist[now * 2] = dist[now];
            }
        }
        if (now - 1 >= 0) {
            if (check[now - 1] === false) {
                next_q.enqueue(now - 1);
                check[now - 1] = true;
                dist[now - 1] = dist[now] + 1;
            }
        }
        if (now + 1 < MAX) {
            if (check[now + 1] === false) {
                next_q.enqueue(now + 1);
                check[now + 1] = true;
                dist[now + 1] = dist[now] + 1;
            }
        }
        if (q.getLength() === 0) {
            q = next_q;
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

if (N > M) {
    console.log(N - M);
} else {
    bfs();
    console.log(dist[M]);
}
