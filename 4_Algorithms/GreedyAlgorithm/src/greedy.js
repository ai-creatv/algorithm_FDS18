// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution(number, k) {
    let j = 0;
    while (k > 0) {
        let c = '0';
        let remove = 0;
        for (let i = 0; i < k + 1; i++) {
            if (c < number[j + i]) {
                c = number[j + i];
                remove = i;
            }
        }
        number = number.slice(0, j) + number.slice(remove + j);
        k -= (remove);
        j++;
    }
    
    return number;
}
