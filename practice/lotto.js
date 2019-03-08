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

function getPrizeLotto() {
    let count = 0;
    while(1) {
        const temp = getLotto();
        if (isPrizeLotto(temp, getLotto())) {
            console.log(count);
            return temp;
        }
        count += 1;
    }
}

/**
 * 단지 LOTTO 번호만 뽑는다면
 * @param count
 * @returns {Array}
 */
function run(count) {
    const result = [];
    for (let num = 0; num < count; num++) {
        result.push(getLotto());
    }
    return result;
}

/**
 * 결과도 항상 랜덤으로 생성할 때
 * @param count
 * @returns {Array}
 */
function ruePrize(count) {
    const result = [];
    for (let num = 0; num < count; num++) {
        result.push(getPrizeLotto());
    }
    return result;
}

/**
 * 난수가 맞은 LOTTO 인지 확인
 * @param number_list
 * @param RESULT_NUM_LIST
 * @returns {boolean}
 */
function isPrizeLotto(number_list, RESULT_NUM_LIST) {
    return number_list.every(num => RESULT_NUM_LIST.find(rNum => num === rNum));
}

// test
console.log(ruePrize(5), 'GOOD LUCK');
