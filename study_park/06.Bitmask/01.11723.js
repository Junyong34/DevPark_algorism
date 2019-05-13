var path = require('path');
var input = require('fs').readFileSync(path.resolve('study_park/06.Bitmask/01.11723.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// var S = input[0] + 1;
var N = input;
var NLen = input.length;
var result = 0;
var output = [];



function typeCheck(type, num) {
    switch (type) {
        case "add":
            result = result | (1 << num);
            break;
        case "check":
            output.push(result & (1 << num) ? 1: 0);
            break;
        case "remove":
            result = result & ~(1 << num);
            break;
        case "all":
            var all_fn = function() {
                var sum = 0;

                for (var ix = 1; ix <= 20; ix++) {
                    sum |= (1 << ix);
                }
                return sum;
            }
            result = all_fn();
            break;
        case "empty":
            result = 0
            break;
        case "toggle":
            result = result ^ (1 << num);
            break;
        default:
            break;
    }
}

for (var ix = 1; ix < NLen; ix++) {
    var values = N[ix].split(" ");
    typeCheck(values[0], values[1] * 1);
}


console.log(output.join("\n"));
