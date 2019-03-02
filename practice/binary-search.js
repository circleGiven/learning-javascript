/**
 * File Name   : Binary search
 *
 * Description : 이진 검색
 *
 * Developer   : circleGiven
 *
 * Date        : 2019. 3. 2.
 */

/**
 * Binary search
 * @param min
 * @param max
 * @param findNumber
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

/**
 * Recursion binary search
 * @param min
 * @param max
 * @param findNumber
 */
function binary_search_recursion(min, max, findNumber) {
    const temp = Math.floor((min + max)/ 2);
    console.log(temp);
    if (temp === findNumber) {
        return;
    } else if (temp < findNumber) {
        binary_search_recursion(temp, max, findNumber);
    } else if (temp > findNumber) {
        binary_search_recursion(min, temp, findNumber);
    }
}

/**
 * RUN
 * @param number
 */
function run(number, isUsedRecursion) {
    isUsedRecursion ? binary_search_recursion(1,128, number) : binary_search(1, 128, number);
}

// test code
run(11, true);