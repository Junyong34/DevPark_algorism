### 문제 풀이 방법

1. 백준 사이트에서 문제를 확인한다.
2. JavaScript 소스 코드를 구현한다. 
    ````javascript
    // sample.js
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.setPrompt('## ');
    rl.prompt();
    
    const sum = (a, b) => { 
      return a + b;
    }

    rl.on('line', (input) => {
      const data = input.split(' ');
      const a = +data[0];
      const b = +data[1];
    
      const result = sum(a, b);

      console.log(result);
    
      rl.prompt();
    });
    ````
    ````
    node sample
    ## 10 20
    30
    ````
3. 백준 사이트는 Node 버전이 낮아 위의 코드 구현을 그대로 옮길 수 없다. 따라서 아래 코드를 작성하여 테스트를 처리한다.
   ````javascript
    var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
    var a = +input[0];
    var b = +input[1];

    var sum = function(a, b) {
      return a + b;
    }

    var result = sum(a, b);
    console.log(result);
   ````

