/**
 * File Name   : object
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 24.
 */

// for in
const SYM = Symbol();
const o = {apple: 1, alien:2, test:3, [SYM]: 4};
console.log(o);
// symbol은 포함되지 않는다
for (let prop in o) {
    if (!o.hasOwnProperty(prop)) {
        continue;
    }
    console.log(`${prop}: ${o[prop]}`);

}

// object keys
// 역시 symbol 프로퍼티는 포함되지 않는다
console.log(Object.keys(o));

// 첫글자가 a로 시작하는 프로피티 나열
Object.keys(o)
  .filter(x => x.match(/^a/))
  .forEach(prop => console.log(`${prop}: ${o[prop]}`));