// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/07.NandM/07.15656.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var check = [];
var N = +(input[0].trim().split(" "))[0]
var M = +(input[0].trim().split(" "))[1]
var value = (input[1].trim().split(" "));
var num = [];
var output = [];
var result = [];
for(var ix = 0; ix< value.length; ix++){
    var number = value[ix];
    num.push(number);
}
num.sort(function (a ,b) {
    return a - b;
})


function go(index, n, m) {
    if (index == m) {
        result.push(output.join(" "));
        return
    }

    for (var ix = 0; ix < n; ix++) {
        // if (check[ix]) continue;
        check[ix] = true;
        output[index] = num[ix];
        go(index + 1, n, m);
        check[ix] = false;

    }
}

go(0, N, M);
console.log(result.join('\n'))
//
//
//
