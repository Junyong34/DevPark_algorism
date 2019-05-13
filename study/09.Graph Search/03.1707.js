// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/09.Graph Search/03.1707.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var K = +input[0].trim().split(" ")[0];
var isColor = [];
var graphNum = [];

function testCaseData(index, v, e) {
    testIndex += e + 1;
    isColor[0] = 0;
    // for (var ix = 0; ix <= v; ix++) {
    //     // graphNum.push([]);
    //     isColor[ix] = 0;
    // }
    graphNum = [];
    // console.log(initVal, initLex)
    for (var ix = 0; ix <= e; ix++) {

        if (!ix) {
            graphNum[ix] = [];
            graphNum[ix].push(0);
            continue;
        }
        // var obj = [];
        var a = +input[ix + index].trim().split(" ")[0];
        var b = +input[ix + index].trim().split(" ")[1];
        // console.log(a,b);
        if (!graphNum[a]) {
            graphNum[a] = [];
        }
        if (!graphNum[b]) {
            graphNum[b] = [];
        }
        // if (graphNum[a].indexOf(b) === -1) {
        graphNum[a].push(b);
        // }

        // if (graphNum[b].indexOf(b) === -1) {
        graphNum[b].push(a);
        // }
    }
}


// if (nodes && nodes.length !== 0) {
//     // var eLex = (nodes.split("\n").length - 1);
//     //
//
//
// function dfs(start) {
//     // isColor[start] = cnt;
//     // if(graphNum[start] == null) return;
//     // console.log(start, "@@@");
//     // if(isColor[start] == null) {
//     //     isColor[start] = 0;
//     // }
//     // var arrayLen =  [...new Set(graphNum[start])];
//     if(graphNum[start] == null) return;
//     for (var ix = 0; ix < graphNum[start].length; ix++) {
//         var tmp = graphNum[start][ix];
//         if (isColor[tmp] == null) {
//             isColor[tmp] = 0;
//         }
//         if (isColor[tmp] !== 0) {
//             // dfs(tmp, 3 - cnt);
//             if (isColor[start] === isColor[tmp]) {
//                 check = false;
//                 return
//             }
//         } else {
//             if (isColor[start] === 1) {
//                 isColor[tmp] = 2;
//                 dfs(tmp);
//             } else {
//                 isColor[tmp] = 1;
//                 dfs(tmp);
//             }
//         }
//     }
// }


var queue = [];

function bfs(start) {
    var c = 1;
    queue.push(start);
    isColor[start] = c;

    while (queue.length !== 0) {
        var index = queue.shift();
        c = 3 - isColor[index];
        if (graphNum[index]) {
            for (var ix = 0; ix < graphNum[index].length; ix++) {
                var next = graphNum[index][ix];

                if (isColor[index] === isColor[next]) {
                    check = false;
                    return
                }
                if (!isColor[next]) {
                    queue.push(next);
                    isColor[next] = c;
                }
            }
        }

    }
}

//
// // // 테스트 케이스 수 만큼 실행시킨다.
// if (K >= 2) {
var testIndex = 1;
// while (K--) {
if (K >= 2 && K <= 5) {
    for (var iz = 1; iz <= K; iz++) {
        var V = +input[testIndex].trim().split(" ")[0];
        var E = +input[testIndex].trim().split(" ")[1];
        if (V >= 1 && E >= 1) {
            isColor = [];
            testCaseData(testIndex, V, E);

            var check = true;

            for (var ix = 1; ix <= V; ix++) {
                if (!isColor[ix]) {
                    // isColor[ix] = 1;
                    // dfs(ix);
                    bfs(ix);
                }
                if (check === false) break;
            }

            // for (var ix = 1; ix <= V; ix++) {
            //     if (!check) break;
            //     for (var iy = 0; iy < graphNum[ix].length; iy++) {
            //         var index = graphNum[ix][iy];
            //         if (isColor[ix] === isColor[index]) {
            //             check = false;
            //             break;
            //         }
            //
            //     }
            // }
            queue.length = 0;
            console.log(check ? "YES" : "NO");
        }

    }
}

// }


// }
