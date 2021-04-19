/*
자릿수의 합
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.
▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
▣ 입력예제 1
7
128 460 603 40 521 137 123
▣ 출력예제 1
137
*/

function solution(num, arr) {
    let result = 0;
    let max = 0;
    let beforeVal = 0;
    arr.forEach(n => {
            const sum =
                (n + '').split('').reduce((ac, cu) => Number(ac) + Number(cu), 0);
            if (sum > max) {
                max = sum;
                result = n;
            } else if (sum === max) {
                if (n < beforeVal) result = beforeVal;
            }
        }
    )

    return result;

}

let arr = [128, 460, 603, 40, 521, 137, 123, 444, 55, 666, 345];
console.log(solution(7, arr));