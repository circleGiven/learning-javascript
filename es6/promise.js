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

countdown(15).then(() => {
    console.log("countdown complete!");
}).catch((err) => {
    console.log("countdown error : "+ err.message);
});