// 클로저
let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        console.log(blockVar);
    }
}

globalFunc();


let f;
{
    let o = { note: 'safe'};
    f = function() {
        return o;
    }
}
let oRef = f();
console.log(oRef.note);
oRef.note = 'no safe';
console.log(oRef.note);



// IIFE 즉시 호출하는 함수표현식
(function() {

})();

// IIFE 는 자신만의 스코프를 가지지만 IIFE 자체는 함수므로 그 스코파 밖으로 무언가 내보낼 수 있다.
const message = (function() {
    const secret = "I'm a secret";
    return `The secret is ${secret.length} characters long`;
})();
console.log(message);

