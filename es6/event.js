const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function (resolve, reject) {
            for(let i = countdown.seconds; i >= 0; i--) {
                // 에러가 발생할 경우 취소
                timeoutIds.push(
                    setTimeout(function () {
                        // 에러가 발생하면 대기중인 타임아웃을 취소
                        if (countdown.superstitious && i === 13) {
                            timeoutIds.forEach(clearTimeout);
                            return reject(new Error("Oh my god"));
                        }
                        // tick 이벤트를 발생
                        countdown.emit('tick', i);
                        // 0일경우 성공
                        if (i === 0) resolve();
                    }, (countdown.seconds - i) * 1000)
                );
                // 에러가 발생할경우 표시만 해주고 그대로 나머지 진행
                // setTimeout(function () {
                //     // superstitious가 true이고 i가 13이면 reject
                //     if (countdown.superstitious && i === 13) {
                //         return reject(new Error("Oh my god"));
                //     }
                //     // tick 이벤트를 발생
                //     countdown.emit('tick', i);
                //     // 0일경우 성공
                //     if (i === 0) resolve();
                // }, (countdown.seconds - i) * 1000);
            }
        });
    }
}

const c = new Countdown(16, true);
// EventEmitter 의 on 메서드가 이벤트를 주시
// c.on('tick', function (i) {
//     if (i > 0) console.log(i + '...');
// });
// c.go()
// .then(function () {
//     console.log("GO!");
// })
// .catch(function (err) {
//    console.log(err.message);
// });



function launch() {
    return new Promise(function (resolve, reject)  {
        console.log("Lift off!");
        setTimeout(function() {
            resolve("In orbit!");
        }, 2 * 1000);
    });
}

const c2 = new Countdown(15)
    .on('tick', i => console.log(i + '...'));

// 프로미스 체인
c2.go()
    .then(launch)
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function (err)  {
        console.error("Houston, we have a problem");
    });