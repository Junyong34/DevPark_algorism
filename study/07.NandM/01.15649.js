var path = require('path');
var input = require('fs').readFileSync(path.resolve('study/07.NandM/01.15649.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var check = [];
var N = +(input[0].trim());
var M = +(input[1].trim());
var output = [];


function go(index, n, m) {
    if (index == m) {
        console.log(output.join(" "));
        return
    }

    for (var ix = 1; ix <= n; ix++) {
        if (check[ix]) continue;
        check[ix] = true;
        output[index] = ix;
        go(index + 1, n, m);
        check[ix] = false;

    }
}

go(0, N, M);


