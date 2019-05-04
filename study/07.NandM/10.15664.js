// var path = require('path');
// var input = require('fs').readFileSync(path.resolve('study/07.NandM/10.15664.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var check = [];
var N = +(input[0].trim().split(" "))[0]
var M = +(input[0].trim().split(" "))[1]
var value = (input[1].trim().split(" "));
var num = [];
var output = [];
for (var ix = 0; ix < value.length; ix++) {
    var number = value[ix];
    num.push(number);
}
num.sort(function (a, b) {
    return a - b;
})


function go(index, start, n, m) {
    if (index == m) {
        console.log(output.join(" "));
        return
    }

    for (var ix = start; ix < n; ix++) {
        if (check[ix] > 0) {
            check[ix] -= 1;
            output[index] = noDuplicateNumber[ix];
            go(index + 1, ix, n, m);
            check[ix] += 1;
        }
        // if (check[ix]) continue;
        // check[ix] = true;
        // output[index] = num[ix];


    }
}

var noDuplicateNumber = [];
for (var ix = 0; ix < num.length; ix++) {
    var number = num[ix];

    if (ix + 1 > num.length) {
        continue;
    }
    if (ix === 0) {
        noDuplicateNumber.push(number);
        check[noDuplicateNumber.length - 1] = 1;
    }
    else if (num[ix] === num[ix - 1]) {
        check[noDuplicateNumber.length - 1] += 1;
    }
    else {
        noDuplicateNumber.push(number);
        check[noDuplicateNumber.length - 1] = 1;
    }
}

go(0, 0, N, M);
// result = [...new Set(output)];
// console.log(result.join("\n"));