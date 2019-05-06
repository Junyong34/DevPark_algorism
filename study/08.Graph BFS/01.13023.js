var path = require('path');
var input = require('fs').readFileSync(path.resolve('study/08.Graph BFS/01.13023.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var M = +input[0].trim().split(" ")[1];
var friend = [];
var visited = [];
var isExist = false;
// for (var ix = 0; ix < M; ix++) {
//     friend.push(Array());
//     for (var iy = 0; iy < N; iy++) {
//         friend[ix].push(0)
//     }
// }


for (var ix = 1; ix <= M; ix++) {
    // var obj = [];
    var a = +input[ix].trim().split(" ")[0];
    var b = +input[ix].trim().split(" ")[1];
    // console.log(a,b);
    friend[ix-1] = [a,b];
    // friend[ix-1][a] = 1;
    // friend[ix-1][b] = 1;
}

console.log(friend);
function dfs(depth, n) {
    if (n === N) {
        isExist = true;
        return;
    }

    visited[depth] = true;// 방문했나?
    // console.log(depth)
    for (var ix = 0; ix < friend[depth].length; ix++) {
        var next = friend[depth][ix];
        console.log(next);
        if (visited[next]) continue;
        // dfs(depth + 1, next)
        dfs(next, n + 1)
        if (isExist) return;
    }
    visited[depth] = false;
}

//
for (var ix = 0; ix < N; ix++) {
    dfs(ix, 1);
    if (isExist) break;

}

if (isExist) {
    console.log("1");
} else {
    console.log("0");
}
// // console.log("0");
