var path = require('path');
var input = require('fs').readFileSync(path.resolve('study_park/07.NandM/02.15650.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');


var N = +(input[0].trim());
var M = +(input[1].trim());
var output = [];


// function go(index, start, n, m) {
//     if (index == m) {
//         console.log(output.join(" "));
//         return
//     }
//
//     for (var ix = start; ix <= n; ix++) {
//         output[index] = ix;
//         go(index + 1, ix + 1, n, m);
//
//     }
// }

function go(index, selected, n, m) {
    if(selected === m){
        console.log(output.join(" "));
        return;
    }

    if(index > n) return
    output[selected] = index;
    go(index +1, selected +1 , n , m);
    output[selected] = 0;
    go(index +1, selected  , n , m);
}

go(1,0, N, M);


