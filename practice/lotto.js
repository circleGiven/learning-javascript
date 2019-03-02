/**
 * File Name   : Lotto
 *
 * Description : 원준이의 로또 생성기
 *
 * Developer   : circleGiven
 *
 * Date        : 2019. 3. 2.
 */


const MAX_LOTTO = 6;

function getLotto() {
    const result = [];
    while(1) {
        if (result.length === MAX_LOTTO) {
            break;
        }
        const num = Math.floor((Math.random() * 45) + 1);
        result.every(number => number !== num) && result.push(num);
    }
    return result;
}

function run(count) {
    const result = [];
    for (let num = 0; num < count; num++) {
        result.push(getLotto());
    }
    return result;
}

console.log(run(4));