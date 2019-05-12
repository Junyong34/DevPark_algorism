var path = require('path');
var input = require('fs').readFileSync(path.resolve('study/09.Graph Search/03.1707.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var K = +input[0].trim().split(" ")[0];
var isColor = [];
var graphNum = [];
var nodes = input.join("\n").trim();
//
// for (var ix = 1; ix < input.join("\n").trim().length; ix++) {
//     var val = input.join("\n")[ix].trim();
//     if (val !== "") {
//         caseLen.push(val);
//     }
//
// }
if (nodes && nodes.length !== 0) {
    var eLex = (nodes.split("\n").length - 1);
    var LineMaxValue = Math.max.apply(null, nodes.split(""));

    function initIsColor() {
        graphNum = [];
        for (var ix = 0; ix <= LineMaxValue; ix++) {
            graphNum.push([]);
            isColor[ix] = 0;
        }
    }

    function sampleData(initVal, initLex) {
        // console.log(initVal, initLex)
        for (var ix = initVal; ix <= initLex; ix++) {

            // var obj = [];
            var a = +input[ix].trim().split(" ")[0];
            var b = +input[ix].trim().split(" ")[1];
            // console.log(a,b);
            if (!graphNum[a]) {
                graphNum[a] = [];
            }
            if (!graphNum[b]) {
                graphNum[b] = [];
            }
            if (graphNum[a].indexOf(b) === -1) {
                graphNum[a].push(b);
            }

            if (graphNum[b].indexOf(b) === -1) {
                graphNum[b].push(a);
            }
        }
    }

    function dfs(start, cnt) {
        isColor[start] = cnt;
        for (var ix = 0; ix < graphNum[start].length; ix++) {
            var tmp = graphNum[start][ix];
            if (isColor[tmp] === 0) {
                dfs(tmp, 3 - cnt);
            }
        }
    }

// // 테스트 케이스 수 만큼 실행시킨다.
    var startIndex = 1;
    var nextLet = eLex / K
    var incre = eLex / K;
    // if (K >= 2) {
    while (K--) {
        initIsColor();
        sampleData(startIndex, nextLet);
        for (var ix = 1; ix < LineMaxValue; ix++) {
            if (isColor[ix] == 0) {
                dfs(ix, 1);
            }
        }
        var check = true;
        for (var ix = 1; ix < LineMaxValue; ix++) {
            if (!check) break;
            for (var iy = 0; iy < graphNum[ix].length; iy++) {
                var index = graphNum[ix][iy];
                if (isColor[ix] === isColor[index]) {
                    check = false;
                    break;
                }

            }
        }
        console.log(check ? "YES" : "NO");
        startIndex += incre;
        nextLet += incre;
    }
    // }


}
