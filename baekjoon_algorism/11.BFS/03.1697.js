// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('03.1697.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var K = +input[0].trim().split(" ")[1];
var check = [];
var dist = [];
for (var ix = 0; ix < 100010; ix++) {
    check[ix] = false;
    dist[ix] = 0
}
var re = 0;

function bfs() {
    var q = new Queue();
    q.enqueue(N);
    check[N] = true;
    dist[N] = 0;
    while (q.getLength()) {
        var index = q.dequeue();
        if (index === K) {
            re = dist[K];
            return re;
        }

        if (index - 1 >= 0) {

            if (check[index - 1] === false) {
                q.enqueue(index - 1);
                check[index - 1] = true;
                dist[index - 1] = dist[index] + 1;
            }
        }
        if(index +1 <= 100000){

        if (check[index + 1] === false) {
            q.enqueue(index + 1);
            check[index + 1] = true;
            dist[index + 1] = dist[index] + 1;
        }
        }
        if(index *2 <= 100000){
            if (check[index * 2] === false) {
                q.enqueue(index * 2);
                check[index * 2] = true;
                dist[index * 2] = dist[index] + 1;
            }
        }


    }
    return re;
}

if (N - K >= 0) {
    console.log(N - K);
} else {

    console.log(bfs());
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

