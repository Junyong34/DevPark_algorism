// https://www.hackerrank.com/challenges/lonely-integer/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the lonelyinteger function below.
function lonelyinteger(a) {
    let cnt = 0;

    for (let ix = 0; ix < a.length; ix++) {
        cnt ^= +(a[ix]);

    }
    return cnt;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));


    let result = lonelyinteger(a);

    ws.write(result + "\n");

    ws.end();
}
