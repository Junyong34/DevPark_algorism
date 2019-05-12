// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/09.Graph Search/02.11724.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].trim().split(" ")[0];
var M = +input[0].trim().split(" ")[1];
var graphNum = [];
var r_dfs = [];
var r_bfs = [];
var check = [];

function initCheck() {
    check = []
    for (var ix = 0; ix <= N; ix++) {
        check.push(false);
    }
}

for (var ix = 0; ix <= N; ix++) {
    graphNum.push([]);
    for (var iy = 0; iy <= N; iy++) {
        graphNum[ix].push(0)
    }
}
for (var ix = 1; ix <= M; ix++) {
    // var obj = [];
    var a = +input[ix].trim().split(" ")[0];
    var b = +input[ix].trim().split(" ")[1];
    // console.log(a,b);

    // graphNum[ix-1] = [a,b];
    graphNum[a][b] = 1;
    graphNum[b][a] = 1;
}

// console.log(graphNum);

//
function dfs(start, n) {
    if (check[start]) {
        return;
    } // 한번이라도 방문하면 리턴

    check[start] = true;
    for (var ix = 0; ix < graphNum[start].length; ix++) {
        var next = graphNum[start][ix];
        if (next == 1 && !check[ix]) {
            dfs(ix, n);
        }
    }
}

initCheck();
var cnt = 1;
for (var ix = 0; ix <= N; ix++) {
    if(!check[ix]){
        dfs(ix, cnt);
        cnt++;
    }

}
console.log(cnt-2);
