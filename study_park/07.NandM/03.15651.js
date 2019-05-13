// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study_park/07.NandM/03.15651.txt'), 'utf8').toString().trim().split(' ');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');


var N = +(input[0]);
var M = +(input[1]);
var output = [];
var result = [];

function go(index, n, m) {
    if (index == m) {
        result.push(output.join(" "));
        return
    }

    for (var ix = 1; ix <= n; ix++) {
        // if (check[ix]) continue;
        // check[ix] = true;
        output[index] = ix;
        go(index + 1, n, m);
        // check[ix] = false;

    }
}

go(0, N, M);
console.log(result.join("\n"));
