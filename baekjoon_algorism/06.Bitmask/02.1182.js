var path = require('path');
var input = require('fs').readFileSync(path.resolve('study_park/06.Bitmask/01.15649.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = input[0].trim().split(" ")[0];
var S = input[0].trim().split(" ")[1];

var number = input[1].trim().split(" ");
var cnt = 0
var sum = 0;
for (var ix = 1; ix < (1 << N); ix++) {
    sum = 0;
    for (var k = 0; k < N; k++) {
        if ((ix & (1 << k))) {
            sum += +(number[k]);
        }
    }
    if (sum == S) {
        cnt++;
    }
}

console.log(cnt);

