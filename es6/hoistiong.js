// let
// x;
// let x = 3;



// var
x;  // undefined
var x = 4;
x;  // 4
// 위는 let과 달리 호이스팅이 일어나기 때문에 에러가 발생하지 않는다

if (x !== 3) {
    console.log(y);
    var y = 5;
    if (y === 5) {
        var x = 3;
    }
    console.log(y);
}
console.log(x);


// 함수 호이스팅
f();
function f() {
    console.log('f');
}

// 단 변수에 할당한 함수 표현식은 호이스팅 되지 않는다
// 변수의 스코프 규칙을 따르기 때문
// f();
// let f = function() {
//     console.log('f');
// }


// 이코드는 var 에서만 해당하는 사항이다. var는 호이스팅 되기 때문
// if (typeof test === 'undefined') {
//     console.log('test is undefined');
// } else {
//
// }
// let test = 5;