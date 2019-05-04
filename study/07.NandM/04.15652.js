var path = require('path');
var input = require('fs').readFileSync(path.resolve('study/07.NandM/04.15652.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');


var N = +(input[0].trim());
var M = +(input[1].trim());
var output = [];

function go(index, start, n, m) {
    if (index == m) {
        console.log(output.join(" "));
        return
    }

    for (var ix = start; ix <= n; ix++) {
        output[index] = ix;
        go(index + 1, ix, n, m);

    }
}

go(0, 1, N, M);


