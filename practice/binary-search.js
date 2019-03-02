/**
 * File Name   : Binary search
 *
 * Description : 이진 검색
 *
 * Developer   : circleGiven
 *
 * Date        : 2019. 3. 2.
 */

function binary_search(min, max, findNumber) {
    let minNum = min;
    let maxNum = max;

    while(1) {
        const temp = Math.floor((minNum + maxNum)/ 2);
        console.log(temp);
        if (temp === findNumber) {
            break;
        } else if (temp < findNumber) {
            minNum = temp;
        } else if (temp > findNumber) {
            maxNum = temp;
        }
    }
}

function run(number) {

}

binary_search(1, 128, 11);