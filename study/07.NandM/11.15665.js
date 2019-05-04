var path = require('path');
var input = require('fs').readFileSync(path.resolve('study/07.NandM/11.15665.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');


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


function go(index, n, m) {
    if (index == m) {
        console.log(output.join(" "));
        return
    }

    for (var ix = 0; ix < n; ix++) {
        // if (check[ix]) continue;
        check[ix] = true;
        output[index] = noDuplicateNumber[ix];
        go(index + 1, n, m);
        check[ix] = false;

    }
}
var noDuplicateNumber = [];
for (let ix = 0; ix < num.length; ix++) {
    var number = num[ix];

    if (ix + 1 > num.length) return;
    if (ix === 0) {
        noDuplicateNumber.push(number);
    }
    else if (num[ix] !== num[ix - 1]) {
        noDuplicateNumber.push(number);
    }
}
go(0, noDuplicateNumber.length, M);