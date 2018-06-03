// 서브루틴
// const colors = ['red', 'oragne', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let colorIndex = -1;
// function getNextRainbowColor() {
//     if(++colorIndex >= colors.length) {
//         colorIndex = 0;
//     }
//     return colors[colorIndex];
// }

// 부수효과가 있는 서브루틴
// const getNextRainbowColor = (function() {
//     const colors = ['red', 'oragne', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     let colorIndex = -1;
//     return function() {
//         if(++colorIndex >= colors.length) {
//             colorIndex = 0;
//         }
//         return colors[colorIndex];
//     };
// })();
//
//
// setInterval(function () {
//     console.log(getNextRainbowColor());
// }, 500);

// 부수효과가 없는 iterator
// function getRainbowIterator() {
//     const colors = ['red', 'oragne', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     let colorIndex = -1;
//     return {
//         next() {
//             if(++colorIndex >= colors.length) {
//                 colorIndex = 0;
//             }
//             return { value: colors[colorIndex], done: false };
//         }
//     };
// }
//
// const rainbowIterator = getRainbowIterator();
// setInterval(function () {
//     console.log(rainbowIterator.next().value);
// }, 500);


// 의도와는 달리 -1만 5번 출력되는 코드
// var i;
// for(i=5; i>=0; i--) {
//     setTimeout(function() {
//        console.log(i === 0 ? "go!" : i);
//     }, (5-i)*1000);
// }

// 클로저를 사용하여 의도대로 돌아감
var i;
for(i=5; i>=0; i--) {
    (function (i) {
        setTimeout(function() {
            console.log(i === 0 ? "go!" : i);
        }, (5-i)*1000);
    })(i);
}

