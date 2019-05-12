// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/08.Graph BFS/01.13023.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var M = +input[0].trim().split(" ")[1];
var visited = [];
var graphNum = [];
var isExist = false;
// function initCheck() {
//     visited = []
//     for (var ix = 0; ix < N; ix++) {
//         visited.push(false);
//     }
// }
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
// console.log(graphNum);
// console.log(friend[0][0],friend[0][1],friend[1][1]);
function dfs(depth, n) {
    if (5 === n) { // 5로 안하면 오류남 N 갯수는 문제 조건철머 엄청날수도있음
        isExist = true;
        return;
    }

    visited[depth] = true;// 방문했나?
    // console.log(depth)
    for (var ix = 0; ix < graphNum[depth].length; ix++) {
        var next = graphNum[depth][ix];
        // console.log(visited[next],next);
        if (visited[next]) continue;
        // dfs(deputh + 1, next)
        dfs(next, n + 1)
        if (isExist) return;
    }
    visited[depth] = false;
}

//
// initCheck();
for (var ix = 0; ix < N; ix++) {
    dfs(ix, 1);
    if (isExist) break;

}
console.log(isExist ? 1 : 0);

// // console.log("0");
