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
// var i;
// for(i=5; i>=0; i--) {
//     (function (i) {
//         setTimeout(function() {
//             console.log(i === 0 ? "go!" : i);
//         }, (5-i)*1000);
//     })(i);
// }


// 지역변수 let 사용
// for(let i=5; i>=0; i--) {
//     setTimeout(function() {
//        console.log(i === 0 ? "go!" : i);
//     }, (5-i)*1000);
// }


// sum
function sum(arr, func) {
    // 함수가 전달되지 않았다면 새 함수 생성
    if (typeof func !== 'function') {
        func = x => x;
        // func = function(x) {
        //     return x;
        // }
    }
    return arr.reduce((a,x) => a += func(x), 0);
}
//
//
// console.log(sum([1,2,3]));
// console.log(sum([1,2,3], x => x*x));


function newSummer(func) {
    return arr => sum(arr, func);
}

const sumOfSquares = newSummer(x => x*x);
const somOfCubes = newSummer(x => Math.pow(x,3));
console.log(sumOfSquares([1,2,3]));
console.log(somOfCubes([1,2,3]));




// 재귀
function findNeedle(haystack) {
    // 더이상 찾을 건초더미가 없다
    if(haystack.length === 0) {
        return "no haystack here!";
    }
    // 바늘을 찾았다
    if(haystack.shift() === 'needle') {
        return "found it!";
    }
    // 건초더미를 줄인다
    return findNeedle(haystack);
}

console.log(findNeedle(['hay','hay','hay','hay','needle','hay','hay']));


// factorial
function factorial(n) {
    if (n===1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(4));