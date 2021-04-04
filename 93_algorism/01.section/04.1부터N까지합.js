/*
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다..

▣ 출력설명
첫 번째 줄에 1부터 N까지의 합을 출력한다.

▣ 입력예제 1
6
▣ 출력예제 1
21

▣ 입력예제 2
10
▣ 출력예제 2
55

*/
const solution = (num) => {
    if (num > 20) throw Error('20이상 자연수만 입력된다.')
    let result = 0;

    for (let ix = 1; ix <= num; ix++) {
        result += ix;
    }
    return result
}

console.log(solution(10));
