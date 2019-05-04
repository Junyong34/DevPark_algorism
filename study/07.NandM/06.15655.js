// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/07.NandM/06.15655.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 1 2 3 4 5 6 7 8
var check = [];
var N = +(input[0].trim().split(" "))[0]
var M = +(input[0].trim().split(" "))[1]
var value = (input[1].trim().split(" "));
var num = [];
var output = [];
for(var ix = 0; ix< value.length; ix++){
    var number = value[ix];
    num.push(number);
}
num.sort(function (a ,b) {
    return a - b;
})


function go(index, start, n, m) {
    if (index == m) {
        console.log(output.join(" "));
        return
    }

    for (var ix = start; ix < n; ix++) {
        if (check[ix]) continue;
        check[ix] = true;
        output[index] = num[ix];
        go(index + 1, ix+1, n, m);
        check[ix] = false;

    }
}

go(0, 0, N, M);
//
//
//
