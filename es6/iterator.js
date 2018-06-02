/**
 * File Name   : iterator
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 6. 1.
 */

class Log {
    constructor() {
        this.messages = [];
    }

    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }

    // 이터레이터 프로토콜
    [Symbol.iterator]() {
        // 배열에서 이터레이터를 가져와 이터레이터 프로토콜 을 구현
        // return this.messages.values();
        let i = 0;
        const messages = this.messages;
        return {
            // method
            next() {
                // 배열의 아이템이 모두 없다면 done true (이터레이터와 같이 구현)

                return i >= messages.length ? {value: undefined, done: true} : {value: messages[i++], done: false};
            }
        }
    }
}

const log = new Log();
log.add("first");
log.add("second");
log.add("third");
log.add("forth");

for(let entry of log) {
    console.log(entry.message);
}


class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rVal = { value: b, done: false };
                b += a;
                a = rVal.value;
                return rVal;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i = 0;
for (let n of fib) {
    console.log(n);
    // 10회 돌면 종료
    if(++i > 9) {
        break;
    }
}