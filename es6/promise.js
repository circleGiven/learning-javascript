function countdown(seconds) {
    return new Promise(function (resolve, reject) {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(function () {
                // 숫자가 13이면 reject 호출
                if (i === 13) return reject(new Error("Oh my god"));
                // i 가 0보다 크면 기록
                if (i > 0) console.log(i + '...');
                // i가 0에 도달하면 resolve 호출
                else resolve(console.log("GO!"));
            }, (seconds - i) * 1000);
        }
    });
}

// countdown(15).then(() => {
//     console.log("countdown complete!");
// }).catch((err) => {
//     console.log("countdown error : "+ err.message);
// });


const fs = require('fs');

// Node function call
// description: 노드 오류 우선 콜백을 프로미스에 적용
function nfcall(f, ...args) {
    return new Promise(function(resolve, reject) {
        f.call(null, ...args, function(err, ...args) {
            if (err) {
                return reject(err);
            }
            resolve(args.length < 2 ? args[0] : args);
        });
    });
}

// promise timeout
function ptimeout(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    });
}

// 제너레이터 실행기 (generator run)
function grun(g) {
    const it = g();
    (function iterate(val) {
        const x = it.next(val);
        if (!x.done) {
            // iterate가 promise를 반환했다면 완료후에 다음 iterate를 실행
            // iterate가 값을 반환했다면 즉시 iterate 실행
            // (setTimeout으로 호출하는 이유는 자바스크립트 엔진은 재귀 호출을 비동기적으로 실행할 때 메모리를 좀더 빨리 회수하기 때문)
            (x.value instanceof Promise) ? x.value.then(iterate).catch(err => it.throw(err)) : setTimeout(iterate, 0, x.value);
        }
    })();
}

function* theFutureIsNow() {
    // 순차적
    // const dataA = yield nfcall(fs.readFile, 'a.txt');
    // const dataB = yield nfcall(fs.readFile, 'b.txt');
    // const dataC = yield nfcall(fs.readFile, 'c.txt');

    // all
    const data = yield Promise.all([
        nfcall(fs.readFile, 'a.txt'),
        nfcall(fs.readFile, 'b.txt'),
        nfcall(fs.readFile, 'c.txt')
    ]);

    yield ptimeout(60*1000);
    yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
}

grun(theFutureIsNow);