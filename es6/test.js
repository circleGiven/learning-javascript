/**
 * File Name   : test
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 15.
 */

'use strict';
// 블록 스코프 변수 선언
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great'},
    { subject: 'Elephants', verb: 'are', object: 'large'}
];

// 객체 분해
function say({subject, verb, object}) {
    // 템플릿 문자열 : 백틱(`)
    console.log(`${subject} ${verb} ${object}`);
}

// for-of
for(let s of sentences) {
    say(s);
}

// es6 연습

// 객체 테스트
// 객체는 일종의 컨테이너
const obj = {};

obj.color = "yellow";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);

// 심볼 프로퍼티
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
// 심볼은 문자열이 아니다
console.log(obj["SIZE"]);
obj["SIZE"] = 'tt';
// 그러므로 심볼의 SIZE와 문자 SIZE는 완전히 다르다
console.log(obj[SIZE]);
console.log(obj["SIZE"]);
console.log(obj);

