// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/09.Graph Search/01.1260.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var M = +input[0].trim().split(" ")[1];
var V = +input[0].trim().split(" ")[2];
var graphNum = [];
var r_dfs = [];
var r_bfs = [];
var check = [];

function initCheck() {
    check = []
    for (var ix = 0; ix < N; ix++) {
        check.push(false);
    }
}

for (var ix = 0; ix <= M; ix++) {
    graphNum.push([]);
}
for (var ix = 1; ix <= M; ix++) {

    // var obj = [];
    var a = +input[ix].trim().split(" ")[0];
    var b = +input[ix].trim().split(" ")[1];
    // console.log(a,b);
    if(!graphNum[a]){
        graphNum[a] = [];
    }
    if(!graphNum[b]){
        graphNum[b] = [];
    }
    if (graphNum[a].indexOf(b) === -1) {
        graphNum[a].push(b);
    }

    if (graphNum[b].indexOf(b) === -1) {
        graphNum[b].push(a);
    }
}

for (var ix = 0; ix < graphNum.length; ix++) {
    if (graphNum[ix] && graphNum[ix].length !== 0 ) {
        graphNum[ix].sort(function (a, b) {
            return a - b;
        });
    }
}

function dfs(start) {
    if (start > N) return;
    check[start] = true;
    r_dfs.push(start);
    for (var ix = 0; ix < graphNum[start].length; ix++) {
        var next = graphNum[start][ix];
        if (!check[next]) {
            dfs(next);
        }
    }
}

var queue = [];

function bfs(start) {
    queue.push(start);
    check[start] = true;
    // r_bfs.push(start);
    while (queue.length !== 0) {
        var index = queue.shift();
        // console.log(index);
        r_bfs.push(index);
        for (var ix = 0; ix < graphNum[index].length; ix++) {
            var next = graphNum[index][ix]
            if (!check[next]) {
                queue.push(next);
                check[next] = true;
            }
        }
    }
}

if (V >= 1) {
    initCheck();
    dfs(V);
    initCheck();
    bfs(V);
}

console.log(r_dfs.join(" "));
console.log(r_bfs.join(" "));