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
    // 템플릿 문자열
    // 백틱(`)
    console.log(`${subject} ${verb} ${object}`);
}

// for-of
for(let s of sentences) {
    say(s);
}